const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");


const Book = sequelize.define('book', {
    // iRecId: {
    //     primaryKey: true,
    //     type: DataTypes.INTEGER,
    // },
    ISBN: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false
});


module.exports = Book;