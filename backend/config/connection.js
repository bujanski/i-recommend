const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('irecommend', 'postgres', 'postgres', {
    host: 'localHost',
    dialect: 'postgres'
});

const testConnection = async () => {
    try{
        await sequelize.authenticate();
        console.log("Connected to database");
    }catch (error) {
        console.log("Connection failed due to this error: ", error);
    }
};

module.exports = {
    sequelize,
    testConnection
};