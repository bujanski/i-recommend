const Movie = require("./movieModel");
const Book = require("./bookModel");
const Videogame = require("./videogameModel");
const Recommendation = require("./recModel");
const User = require("./userModel");

Movie.hasMany(Recommendation);

Book.hasMany(Recommendation);

Videogame.hasMany(Recommendation);

User.hasMany(Recommendation);
Recommendation.belongsTo(User);


module.exports = {
    Movie,
    Book,
    Videogame,
    User,
    Recommendation
}