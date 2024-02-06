const Movie = require("./movieModel");
const Book = require("./bookModel");
const Videogame = require("./videogameModel");


Movie.hasMany(Recommendation);
Recommendation.belongsTo(Movie);

Book.hasMany(Recommendation);
Recommendation.belongsTo(Book);

User.hasMany(Shipment);
Shipment.belongsTo(User);


module.exports = {
    Movie,
    Book,
    Videogame
}