const Movie = require("./movieModel");
const Book = require("./bookModel");
const Videogame = require("./videogameModel");
const Recommendation = require("./recModel");
const User = require("./userModel");


Movie.hasMany(Recommendation);
Recommendation.belongsTo(Movie);

Book.hasMany(Recommendation);
Recommendation.belongsTo(Book);

Videogame.hasMany(Recommendation);
Recommendation.belongsTo(Videogame);

User.hasMany(Recommendation);
Recommendation.belongsTo(User);


module.exports = {
    Movie,
    Book,
    Videogame,
    User,
    Recommendation
}