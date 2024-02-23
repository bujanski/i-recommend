const fs = require('fs');
const csv = require('csv-parser');
const axios = require('axios');

const gameCount = 60; // number of games to seed db
const bookCount = 20; // number of books to seed db
const initialVGURL = 'https://api.rawg.io/api/games?key=03789985d56e4406b13c5deb57fac7ad&dates=1980-01' +
        '-01,2024-01-01';
const initialBookURL = 'https://www.loc.gov/books/?fo=json&';

// This function currently creates a json file for video games. book functionality to be added
// set the gameCount above to the # of games you'd like to grab (multiples of 20)
// uncomment the execution on line 74
// run node.js extractData.js

async function buildDataFile(count, url, increment) {
    let mediaType = '';
    let mediaArray = [];

    for (let i = 0; i * increment < count; i += 1) {
        try {
            const queryData = await axios.get(url);

            if (i === 0) {
                if (queryData.data.next) 
                    mediaType = 'videoGame';
                else 
                    mediaType = 'book';
                }
            
            if (mediaType === 'videoGame') {

                for (g = 0; g < queryData.data.results.length; g++) {
                    // Extracting desired keys using destructuring
                    const {name, genres, platforms, playtime, released, esrb_rating, background_image, metacritic} = queryData.data.results[g];

                    // Creating a new object with filtered keys
                    let tempObject = {
                        name,
                        genres,
                        platforms,
                        playtime,
                        released,
                        esrb_rating,
                        background_image,
                        metacritic
                    };

                    // Pushing the new object to mediaArray
                    mediaArray.push(tempObject);
                }

                url = queryData.data.next;

            } else {
                mediaType = 'book';
                url = 'https://www.loc.gov/books/?fo=json&' + [i + 1];
            }

        } catch (error) {
            console.error('Error fetching game data', error);
        }

        // Introduce a one-second delay before the next iteration
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    const jsonArray = JSON.stringify(mediaArray, null, 2);

    // Write the full contents of the array to the output file
    const writeStream = fs.createWriteStream('videoGameData.json');
    writeStream.write(jsonArray);
};

// buildDataFile(gameCount, initialVGURL, 20);

// function convertVgJsontoJS() {

//   // Read the JSON file
//   const rawData = fs.readFileSync('VideoGameData.json');
//   const jsonData = JSON.parse(rawData);

//   // Extracting required fields and restructuring
//   const Videogames = jsonData.map(game => ({
//     name: game.name,
//     genres: game.genres.map(genre => genre.name).join(', '),
//     platforms: game.platforms.map(platform => platform.name).join(', '),
//     released: game.released.substring(0, 4),
//     playtime: game.playtime.toString() + ' min',
//     //esrb_rating: game.esrb_rating.name,
//     background_image: game.background_image,
//     //metacritic: game.metacritic.toString(),
//   }));

//   console.log(Videogames);

//   // Exporting as a module
//   //module.exports = { Videogames };

// }

function convertVgJsontoJS() {
  // Read the JSON file
  const rawData = fs.readFileSync('VideoGameData.json');
  const jsonData = JSON.parse(rawData);

  // Extracting required fields and restructuring
  const Videogames = jsonData.map(game => {
    const genres = game.genres ? game.genres.map(genre => genre.name).join(', ') : '';
    const platforms = game.platforms ? game.platforms.map(platform => platform.platform.name).join(', ') : 'No platforms specified';
    const released = game.released ? game.released.substring(0, 4) : '';
    const playtime = game.playtime ? game.playtime.toString() + ' min' : '';
    const esrb_rating = game.esrb_rating ? game.esrb_rating.name : '';
    const background_image = game.background_image ? game.background_image : '';
    const metacritic = game.metacritic ? game.metacritic.toString() : '';

    return {
      name: game.name || '',
      genres,
      platforms,
      released,
      playtime,
      esrb_rating,
      background_image,
      metacritic,
    };
  });

  // Convert the array of objects to a string
  const videogamesData = 'const videogames = ' + JSON.stringify(Videogames, null, 2) + ';\n\nmodule.exports = { videogames };';

  // Write the stringified data to the file
  fs.writeFileSync('videogameData.js', videogamesData);

  console.log('Videogame data written to videogameData.js');
}

convertVgJsontoJS();

function parseAndWriteToJS(movieData) {
    const writeStream = fs.createWriteStream('movieData.js');
    writeStream.write('const movies = [\n');
    fs
        .createReadStream(movieData)
        .pipe(csv())
        .on('data', (row) => {
            const jsonString = `  {${Object
                .entries(row)
                .map(([key, value]) => `${key}:${JSON.stringify(value)}`)
                .join(',')}}`;
            writeStream.write(`${jsonString},\n`);
        })
        .on('end', () => {
            writeStream.write('];\n\nmodule.exports = { movies };');
            writeStream.end();
            console.log('Movie data written to  movieData.js ');
        });
}
// parseAndWriteToJS(' iRecommendMovies.csv ');