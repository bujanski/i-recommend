const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");


const User = sequelize.define('Users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false
});


module.exports = User
;