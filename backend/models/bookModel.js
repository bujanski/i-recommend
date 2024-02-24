const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");


const Book = sequelize.define('Books', {
    // iRecId: {
    //     primaryKey: true,
    //     type: DataTypes.INTEGER,
    // },
    // ISBN: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
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
    libId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image_url: {
        type: DataTypes.STRING,
    },
    langauge: {
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