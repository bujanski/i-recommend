const fs = require('fs');
const csv = require('csv-parser');

function parseAndWriteToJS(movieData) {
  // Create a write stream to the new JavaScript file
  const writeStream = fs.createWriteStream('movieData.js');

  // Write the beginning of the JavaScript array
  writeStream.write('const movies = [\n');

  // Read the CSV file and write each row as an object to the JavaScript file
  fs.createReadStream(movieData)
    .pipe(csv())
    .on('data', (row) => {
      // Convert each row to a JSON string and write it to the file
      writeStream.write(`  ${JSON.stringify(row)},\n`);
    })
    .on('end', () => {
      // Write the end of the JavaScript array and close the file
      writeStream.write('];\n\nmodule.exports = { movies };');
      writeStream.end();
      console.log('Movie data written to movieData.js');
    });
}

// Usage
parseAndWriteToJS('iRecommendMovies.csv');
