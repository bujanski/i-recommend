//const {Book,Movie,Videogame,Recommendation} = require("../models/associations");
const Movie = require('../models/movieModel');
const Videogame = require('../models/videogameModel');
const Book = require('../models/bookModel');
const User = require('../models/userModel');
const { sequelize } = require("./connection");
const movieData = require("../data/movieData");
const videogameData = require("../data/videogameData");
const bookData = require("../data/bookData");
const userData = require("../data/userData");


const Movies = movieData.movies;
const Videogames = videogameData.videogames;
const Books = bookData.books;
const Users = userData.users;



const seedDatabase = async () => {

    await sequelize.sync({force: true})

    // const models = [Movie,Book,Videogame,Recommendation];
    const models = [Movie, Videogame, Book, User];
    // const data = [Movies,Books,Videogames,Recommendations];
    const data = [Movies, Videogames, Books, Users];

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