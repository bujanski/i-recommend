const fs = require('fs');
const csv = require('csv-parser');
const axios = require('axios');

const gameCount = 1000; // number of games to seed db
const bookCount = 200; // number of books to seed db
const initialVGURL = 'https://api.rawg.io/api/games?key=03789985d56e4406b13c5deb57fac7ad&dates=1980-01-01,2024-01-01';
const initialBookURL = 'https://www.loc.gov/books/?fo=json&';

// This function currently creates a json file for video games. book
// functionality to be added set the gameCount above to the # of games you'd
// like to grab (multiples of 20) uncomment the execution on line 74 run node.js
// extractData.js

async function buildDataFile(count, url, increment, mediaType) {
    let mediaArray = [];

    for (let i = 0; i * increment < count; i += 1) {
        try {
            const queryData = await axios.get(url);

            if (mediaType === 'videoGame') {

                for (let g = 0; g < queryData.data.results.length; g++) {
                    // Extracting desired keys using destructuring
                    const {
                        name,
                        genres,
                        platforms,
                        playtime,
                        released,
                        esrb_rating,
                        background_image,
                        metacritic
                    } = queryData.data.results[g];

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

            } else if (mediaType == "book") {
                for (let b = 0; b < queryData.data.results.length; b++) {
                    const {
                        contributor,
                        date,
                        id,
                        image_url,
                        language,
                        subject,
                        title
                    } = queryData.data.results[b];

                    let tempObject = {
                        contributor,
                        date,
                        id,
                        image_url,
                        language,
                        subject,
                        title
                    };
                    mediaArray.push(tempObject);
                }

                url = 'https://www.loc.gov/books/?fo=json&sp=' + [i + 1];
            } else {
                console.log("No matching media type.")
            }

        } catch (error) {
            console.error(`Error fetching ${mediaType} data`, error);
        }

        // Introduce a one-second delay before the next iteration
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    const jsonArray = JSON.stringify(mediaArray, null, 2);

    // Write the full contents of the array to the output file
    if (mediaType == "videoGame") {
        const writeStream = fs.createWriteStream('videoGameData.json');
        writeStream.write(jsonArray);
    }
    else if (mediaType == "book") {
        const writeStream = fs.createWriteStream('bookData.json');
        writeStream.write(jsonArray);
    }
    else console.log("No data to write");
    
};

buildDataFile(gameCount, initialVGURL, 20, "videoGame");
// buildDataFile(bookCount, initialBookURL, 25, "book");

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

//convertVgJsontoJS();

function convertBookJsontoJS() {
  // Read the JSON file
  const rawData = fs.readFileSync('bookData.json');
  const jsonData = JSON.parse(rawData);

  // Extracting required fields and restructuring
  const Books = jsonData.map(book => {
    const title = book.title ? book.title.slice(0, 254) : '';
    const contributor = book.contributor ? book.contributor.join(', ').slice(0, 254) : '';
    const date = book.date ? book.date : '';
    //const id = book.id ? book.id : '';
    const image_url = book.image_url ? book.image_url.join(', ').slice(0, 254) : '';
    const language = book.language ? book.language.join(', ') : '';
    const subject = book.subject ? book.subject.join(', ').slice(0, 254) : '';
  
    return {
      title,
      contributor,
      date,
      //id,
      image_url,
      language,
      subject,
    };
  });

  // Convert the array of objects to a string
  const booksData = 'const books = ' + JSON.stringify(Books, null, 2) + ';\n\nmodule.exports = { books };';

  // Write the stringified data to the file
  fs.writeFileSync('bookData.js', booksData);

  console.log('Book data written to bookData.js');
}

//convertBookJsontoJS();

function convertUserJsontoJS() {
  // Read the JSON file
  const rawData = fs.readFileSync('fakeUsers.json');
  const jsonData = JSON.parse(rawData);

  // Extracting required fields and restructuring
  const Users = jsonData.map(user => {
    const username = user.username ? user.username : '';
    const email = user.email ? user.email : '';
    const firstName = user.firstName ? user.firstName : '';
    const lastName = user.lastName ? user.lastName : '';
    const createdAt = user.createdAt ? user.createdAt : '';

    return {
      username,
      email,
      firstName,
      lastName,
      createdAt,
    };
  });

  // Convert the array of objects to a string
  const usersData = 'const users = ' + JSON.stringify(Users, null, 2) + ';\n\nmodule.exports = { users };';

  // Write the stringified data to the file
  fs.writeFileSync('userData.js', usersData);

  console.log('User data written to userData.js');
}

//convertUserJsontoJS();

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
            console.log('Movie data written to movieData.js ');
        });
}
// parseAndWriteToJS(' iRecommendMovies.csv ');