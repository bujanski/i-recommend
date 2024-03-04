const fs = require('fs');
const axios = require('axios');

const fakeRecommendations = require('./fake_recommendations.json'); // Assuming you have the generated data in a file

// Simulate database functions for fetching titles
async function getMovieTitle(movieId) {
    let movie = {};
    try {
        movie = await axios.get(`http://localhost:8000/movies/movie/${movieId}`)
        
    }catch (error) {
        console.error("Error searching database", error);
    }

    return movie.data;
}

async function getBookTitle(bookId) {
    let book = {};
    try {
        book = await axios.get(`http://localhost:8000/books/book/${bookId}`)
        
    }catch (error) {
        console.error("Error searching database", error);
    }

    return book.data;
}

async function getVideogameTitle(videogameId) {
    let book = {};
    try {
        book = await axios.get(`http://localhost:8000/videogames/videogame/${videogameId}`)
        
    }catch (error) {
        console.error("Error searching database", error);
    }

    return book.data;
}

// Function to add titles to recommendations
async function addTitlesToRecommendations(recommendations) {
    const updatedRecommendations = [];

    for (const rec of recommendations) {
        const updatedRec = { ...rec };

        if (rec.MovieId) {
            const movie = await getMovieTitle(rec.MovieId);
            updatedRec.title = movie.title;
        } else if (rec.BookId) {
            const book = await getBookTitle(rec.BookId);
            updatedRec.title = book.title;
        } else if (rec.VideogameId) {
            const videogame = await getVideogameTitle(rec.VideogameId);
            updatedRec.title = videogame.name;
        }

        updatedRecommendations.push(updatedRec);
    }

    return updatedRecommendations;
}

// Function to save updated recommendations to a JavaScript file
function saveRecommendationsToFile(recommendations) {
    const updatedRecommendationsCode = `const recommendationsArray = ${JSON.stringify(recommendations, null, 2)};\n\nmodule.exports = recommendationsArray;`;

    fs.writeFile('./fake_recommendations.js', updatedRecommendationsCode, (err) => {
        if (err) {
            console.error('Error saving recommendations to file', err);
        } else {
            console.log('Recommendations saved to file successfully');
        }
    });
}

// Example: Add titles to the fake recommendations and save to a JavaScript file
async function processFakeRecommendations() {
    const recommendationsWithTitles = await addTitlesToRecommendations(fakeRecommendations);
    console.log(JSON.stringify(recommendationsWithTitles, null, 2));

    // Save the updated recommendations to a JavaScript file
    saveRecommendationsToFile(recommendationsWithTitles);
}

// Run the example
processFakeRecommendations();