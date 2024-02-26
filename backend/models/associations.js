const Movie = require("./movieModel");
const Book = require("./bookModel");
const Videogame = require("./videogameModel");
const Recommendation = require("./recModel");
const User = require("./userModel");


User.hasMany(Movie);
Movie.belongsTo(User);

User.hasMany(Book);
Book.belongsTo(User);

User.hasMany(Videogame);
Videogame.belongsTo(User);

User.hasMany(Recommendation);
Recommendation.belongsTo(User);


module.exports = {
    Movie,
    Book,
    Videogame,
    User,
    Recommendation
}