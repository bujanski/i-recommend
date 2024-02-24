const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");


const Videogame = sequelize.define('Videogames', {
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
        type: DataTypes.STRING,
    },
    esrb_rating: {
        type: DataTypes.STRING,
    },
    background_image: {
        type: DataTypes.STRING,
    },
    metacritic: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false
});


module.exports = Videogame;