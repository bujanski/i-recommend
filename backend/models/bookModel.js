const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");


const Book = sequelize.define('Books', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contributor: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.STRING,
    },
    image_url: {
        type: DataTypes.STRING,
    },
    language: {
        type: DataTypes.STRING,
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false
});


module.exports = Book;