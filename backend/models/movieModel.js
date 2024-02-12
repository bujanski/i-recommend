const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");


const Movie = sequelize.define('Movie', {
    // iRecId: {
    //     primaryKey: true,
    //     type: DataTypes.INTEGER,
    // },
    title: {
        type: DataTypes.STRING,
        //allowNull: false,
    },
    director: {
        type: DataTypes.STRING,
    },
    year: {
        type: DataTypes.STRING,
    },
    actors: {
        type: DataTypes.STRING,
    },
    awards: {
        type: DataTypes.STRING,
    },
    boxOffice: {
        type: DataTypes.STRING,
    },
    country: {
        type: DataTypes.STRING,
    },
    genre: {
        type: DataTypes.STRING,
    },
    language: {
        type: DataTypes.STRING,
    },
    metaScore: {
        type: DataTypes.STRING,
    },
    imageUrl: {
        type: DataTypes.STRING,
    },
    rated: {
        type: DataTypes.STRING,
    },
    runtime: {
        type: DataTypes.STRING,
    },
    writer: {
        type: DataTypes.STRING,
    },
    imdbID: {
        type: DataTypes.STRING,
    },
    imdbRating: {
        type: DataTypes.STRING,
    },

}, {
    timestamps: false
});


module.exports = Movie;