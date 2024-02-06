const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");


const Book = sequelize.define('book', {
    iRecId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
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

sequelize.sync()
    .then(() => {
        console.log('Synced Book Model successfully!')
    })
    .catch(err => {
        console.log('Error syncing database', err)
    })

module.exports = Book;