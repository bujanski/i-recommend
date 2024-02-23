const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");


const User = sequelize.define('book', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dateCreated: {
        type: DataTypes.STRING,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    avatar: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false
});


module.exports = User
;