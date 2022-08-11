### Disney API

This project was created for educational purposes as part of Alkemy's acceleration program.

### Challenge
Develop an API to explore Disney's world, which allows us to know and modify the characters that compose it and understand which movies they participated in. On the other hand, it must expose the information so that any front end can consume it.

- Use NodeJs and Express
- Routes must follow REST patron.
- Use Sequelize

### Technical requirements
#### 1. Database
##### Character:
- Image
- Name
- Age
- Weight
- Story
- Associated Movies

##### Movie:
- Image
- Title
- Released date
- Rating (1 - 5)
- Associated Characters

##### Genre:
- Image
- Name
- Associated Movies

### 3. Character list
- Endpoint: /characters
- Shows: Image and Name

### 4. Create, Read, Update and Delete character (CRUD)
Endpoints:
- GET /characters: lists all characters.
- POST /characters: post a new character.
- PUT /characters/id: update character.
- DELETE /characters/id: delete character.

### 5. Character detail
- Endpoint: /characters/:id
- Shows: all the information about a particular character, including associated movies.

### 6. Searching and filtering
Endpoints:
- GET /characters?name=name
- GET /characters?age=age
- GET /characters?weight=weight
It allows searching and filtering by: name, age, and weight where search terms are sent as query parameters.

### 7. Movies list
- Endpoint: /movies
- Shows: Image, title, and released date

### 9. Create, Read, Update and Delete movie (CRUD)
Endpoints:
- GET /movies: lists all movies.
- POST /movies: post a new movie.
- PUT /movies/id: update movie.
- DELETE /movies/id: delete movie.



