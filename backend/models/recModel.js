const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

const Recommendation = sequelize.define('Recommendations', {
    // iRecId: {
    //     primaryKey: true,
    //     type: DataTypes.INTEGER,
    // },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    recTopic: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    recList: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
});


module.exports = Recommendation;