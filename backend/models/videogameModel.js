const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");


const Videogame = sequelize.define('videogame', {
    iRecId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    developer: {
        type: DataTypes.STRING,
    },
    publisher: {
        type: DataTypes.STRING,
    },
    genre: {
        type: DataTypes.STRING,
    },
    platforms: {
        type: DataTypes.STRING,
    },
    year: {
        type: DataTypes.INTEGER,
    },
    numRecs: {
        type: DataTypes.INTEGER,
    },
}, {
    timestamps: false
});

// sequelize.sync()
//     .then(() => {
//         console.log('Synced Videogame Model successfully!')
//     })
//     .catch(err => {
//         console.log('Error syncing database', err)
//     })

module.exports = Videogame;