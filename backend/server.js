const express = require('express');
const {testCpnnection} = require('./config/connection');
const app = express();
const port = 8000;

app.use(express.json());


app.listen(port, () => {
    console.log('Listening on port: ', port)
})