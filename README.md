### Disney API

This project was created for educational purposes as part of Alkemy's acceleration program.

### Challenge
It is a Node-Express REST API to explore Disney's world, which allows you to meet and modify its movies and the characters that participated.
The information is exposed for any frontend to consume it.

- Use NodeJs and Express
- Routes must follow REST architecture.
- Use Sequelize

### Technical requirements
### 1. Database
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

### 2. User authentication
To make requests the user needs to authenticate first and get a token. 
Endpoints:
- POST /auth/register: create a user and get a token.
- POST /auth/login: login with user credentials and token.


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

### 6. Searching and filtering Characters
Endpoints:
- GET /characters?name=name
- GET /characters?age=age
- GET /characters?weight=weight
- GET /characters?movies=idMovie

It allows searching and filtering by: name, age, weight, and movies where search terms are sent as query parameters.

### 7. Movies list
- Endpoint: /movies
- Shows: Image, title, and released date

### 8. Movie detail
- Endpoint: /movies/:id
- Shows: all the information about a particular movie, including associated characters.

### 9. Create, Read, Update and Delete movie (CRUD)
Endpoints:
- GET /movies: lists all movies.
- POST /movies: post a new movie.
- PUT /movies/id: update movie.
- DELETE /movies/id: delete movie.

### 10. Searching and filtering Movies
Endpoints:
- GET /movies?name=name
- GET /movies?genre=idGenre

It allows searching and filtering by: name, and genres where search terms are sent as query parameters.

### 11. Emails
When the user signs up, it receives a welcome email. It was made with SendGrid.

