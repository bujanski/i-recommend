//const {Book,Movie,Videogame,Recommendation} = require("../models/associations");
const Movie = require('../models/movieModel');
const Videogame = require('../models/videogameModel');
const { sequelize } = require("./connection");
const movieData = require("../data/movieData");
const videogameData = require("../data/videogameData");


const Movies = movieData.movies;
const Videogames = videogameData.videogames;

// const Recommendations = [

//   ];



const seedDatabase = async () => {

    await sequelize.sync({force: true})

    // const models = [Movie,Book,Videogame,Recommendation];
    const models = [Movie, Videogame];
    // const data = [Movies,Books,Videogames,Recommendations];
    const data = [Movies, Videogames];

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