const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");


const Videogame = sequelize.define('videogame', {
    // iRecId: {
    //     primaryKey: true,
    //     type: DataTypes.INTEGER,
    // },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genres: {
        type: DataTypes.STRING,
    },
    platforms: {
        type: DataTypes.STRING,
    },
    released: {
        type: DataTypes.STRING,
    },
    playtime: {
        type: DataTypes.INTEGER,
    },
    esrb_rating: {
        type: DataTypes.STRING,
    },
    background_image: {
        type: DataTypes.STRING,
    },
    metacritic: {
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