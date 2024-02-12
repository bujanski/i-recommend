//const {Book,Movie,Videogame,Recommendation} = require("../models/associations");
const Movie = require('../models/movieModel');
const { sequelize } = require("./connection");
const movieData = require("../data/movieData");


//Move these to their own data files
// const Movies = [
//   {
//       title: 'BlacKkKlansman',
//       director: 'Spike Lee',
//       year: '2018',
//       actors: 'John David Washington, Adam Driver, Laura Harrier',
//       awards: 'Won 1 Oscar. 46 wins & 214 nominations total',
//       boxOffice: '$49,275,340',
//       country: 'United States, China',
//       genre: 'Biography, Comedy, Crime',
//       language: 'English',
//       metaScore: '83',
//       imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjUyOTE1NjI0OF5BMl5BanBnXkFtZTgwMTM4ODQ5NTM@._V1_SX300.jpg',
//       rated: 'R',
//       runtime: '135 min',
//       writer: 'Charlie Wachtel, David Rabinowitz, Kevin Willmott',
//       imdbID: 'tt7349662',
//       imdbRating: '7.5'
//     },
// ];

const Movies = movieData.movies;

//console.log(Movies);

// const Books = [

//   ];  

// const Videogames = [
    
//   ];

// const Recommendations = [

//   ];

// example code from chatGPT for injecting data into the database
// function processMovieData () {
//   fs.createReadStream(movieData)
//   .pipe(csv())
//   .on('Movies', (row) => {
//     // Push each row to the data array
//     Movies.push(row);
//   })
//   .on('end', () => {
//     // Once parsing is complete, bulk insert the data into the database
//     sequelize.transaction(async (transaction) => {
//       try {
//         await Movie.bulkCreate(Movies, { transaction });
//         console.log('Data inserted successfully');
//       } catch (error) {
//         console.error('Error inserting data:', error);
//         // Rollback the transaction if an error occurs
//         transaction.rollback();
//       }
//     });
//   });

// }



const seedDatabase = async () => {

    await sequelize.sync({force: true})

    // const models = [Movie,Book,Videogame,Recommendation];
    const models = [Movie];
    // const data = [Movies,Books,Videogames,Recommendations];
    const data = [Movies];

    //console.log(data[0]);

    for (let x = 0; x < models.length; x++) {
        try {
            await models[x].bulkCreate(data[x]);
            console.log('Added data for', models[x])
        } catch (error) {
            console.log('Data', error);
        }
    }

}

//console.log(movieData.movies);

module.exports = {seedDatabase};