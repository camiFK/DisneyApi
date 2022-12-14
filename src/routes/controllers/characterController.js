const Character = require( "../../models/Character")
const Movie = require("../../models/Movie")
const { Op } = require("sequelize")

 const getCharacters = async (req, res, next) => {
  try {
    const { name, age, weight, movies} = req.query;
    
    const queries = {}
    const moviesQuery = {}

     if (name) { queries.name = { [Op.like]: `%${name}%` }; }
     if (age) { queries.age = age; }
     if (weight) { queries.weight = weight; }
     if (movies) { moviesQuery.id = movies }

     const allCharacters = await Character.findAll({
       attributes: ["id", "name", "image"],
       where: queries,
       include: [{
         model: Movie,
         where: moviesQuery,
         attributes: []
       }]
     })

     return res.send(allCharacters);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

 const postCharacter = async (req, res) => {
  try {
    let { name, image, age, weight, story, movie } = req.body;

    const newCharacter = await Character.create({
      name,
      image,
      age,
      weight,
      story,
    });

    let movieSelected = await Movie.findAll({
      where: {
        title: movie,
      },
    });

    await newCharacter.addMovies(movieSelected);

    res.status(201).send(newCharacter);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

 const updateCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, age, weight, story, movies } = req.body;

    const updated = await Character.findByPk(id);

    name ? (updated.name = name) : null;
    image ? (updated.image = image) : null;
    age ? (updated.age = age) : null;
    weight ? (updated.weight = weight) : null;
    story ? (updated.story = story) : null;
    movies ? (updated.movies = movies) : null;

    await updated.save();

    res.json({ updated });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

 const deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params;

    await Character.destroy({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

 const getCharacter = async (req, res) => {
  try {
    const { id } = req.params;

    const character = await Character.findOne({
      where: {
        id,
      },
      include: {
        model: Movie,
        attributes: ["title"],
        through: {
          attributes: [],
        },
      },
    });

    res.json(character);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCharacters,
  postCharacter,
  updateCharacter,
  deleteCharacter,
  getCharacter,
}
