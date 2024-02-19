const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

const Recommendation = sequelize.define('recommendation', {
    iRecId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mediaType: {
        type: DataTypes.STRING,
    },
    year: {
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


module.exports = Recommendation;