const {Book,Movie,Videogame,Recommendation} = require("../models/associations");
const { sequelize } = require("./connection");
const movieData = require("../data/movieData");


//Move these to their own data files
// const Movies = [
//   'title: 300',
//   'director: Zack Snyder',
//   year: '',1
//   actors: '',
//   awards: '',
//   boxOffice: '',
//   country: '',
//   genre: '',
//   language: '',
//   metaScore: '',
//   imageUrl: '',
//   rated: '',
//   runtime: '',
//   writer: '',
//   imdbID: '',
//   imdbRating: ''
// ];

const Movies = movieData;

//console.log(Movies);

const Books = [

  ];  

const Videogames = [
    
  ];

const Recommendations = [

  ];

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

    console.log(data);

    for (let x = 0; x < models.length; x++) {
        try {
            await models[x].bulkCreate(data[x]);
            console.log('Added data for ', models[x])
        } catch (error) {
            console.log('Data', error);
        }
    }

}

//console.log(movieData.movies[0]);

module.exports = {seedDatabase};