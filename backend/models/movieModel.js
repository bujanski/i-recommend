const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");


const Movie = sequelize.define('movie', {
    iRecId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    director: {
        type: DataTypes.STRING,
    },
    year: {
        type: DataTypes.INTEGER,
    },
    actors: {
        type: DataTypes.STRING,
    },
    awards: {
        type: DataTypes.STRING,
    },
    boxOffice: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
    },
    imageURL: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false
});


//move into it's own seeding module
// sequelize.sync({alter: true})
//     .then(() => {
//         console.log('Synced Movie Model successfully!')
//     })
//     .catch(err => {
//         console.log('Error syncing database', err)
//     })

module.exports = Movie;