const app = require('./app.js')
const sequelize = require('./database/db')

async function server() {
    try {
        await sequelize.sync({force: false}) // Syncronizes the database with the models
        app.listen(3001)
        console.log('Server running on port 3001')
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

}

server();