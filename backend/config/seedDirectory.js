const {Book,Movie,Videogame,User,Recommendation} = require("../models/associations");
const { sequelize } = require("./connection");
const movieData = require("../data/movieData");
const videogameData = require("../data/videogameData");
const bookData = require("../data/bookData");
const userData = require("../data/userData");
const recData = require("../data/recData");


const Movies = movieData.movies;
const Videogames = videogameData.videogames;
const Books = bookData.books;
const Users = userData.users;
const Recommendations = recData.recommendations;



const seedDatabase = async () => {

    await sequelize.sync({force: true})

    const models = [Movie, Videogame, Book, User, Recommendation];
    const data = [Movies, Videogames, Books, Users, Recommendations];

    for (let x = 0; x < models.length; x++) {
        try {
            await models[x].bulkCreate(data[x]);
            console.log('Added data for', models[x])
        } catch (error) {
            console.log('Data', error);
        }
    }

}

module.exports = {seedDatabase};