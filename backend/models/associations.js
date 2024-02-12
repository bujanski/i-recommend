const Movie = require("./movieModel");
const Book = require("./bookModel");
const Videogame = require("./videogameModel");
const Recommendation = require("./recModel");


Movie.hasMany(Recommendation);
Recommendation.belongsTo(Movie);

Book.hasMany(Recommendation);
Recommendation.belongsTo(Book);

Videogame.hasMany(Recommendation);
Recommendation.belongsTo(Videogame);


module.exports = {
    Movie,
    Book,
    Videogame,
    Recommendation
}