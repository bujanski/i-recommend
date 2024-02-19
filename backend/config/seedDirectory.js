//const {Book,Movie,Videogame,Recommendation} = require("../models/associations");
const Movie = require('../models/movieModel');
const { sequelize } = require("./connection");
const movieData = require("../data/movieData");


const Movies = movieData.movies;

// const Books = [

//   ];  

// const Videogames = [
    
//   ];

// const Recommendations = [

//   ];



const seedDatabase = async () => {

    await sequelize.sync({force: true})

    // const models = [Movie,Book,Videogame,Recommendation];
    const models = [Movie];
    // const data = [Movies,Books,Videogames,Recommendations];
    const data = [Movies];

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