const express = require('express');
const app = require('./app');
const bodyParser = require('body-parser');
const {MongoClient} =  require('mongodb');
const client = new MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});
client.connect().then(()=> console.log("Подключение к бд успешно!"));
const server = express();
server.client = client;
server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser({limit: '5mb'}));
server.use(app);
server.listen(3000, 'localhost', () => console.log("Сервер запущен"));


module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        return res.status(400).json({ message: err.message });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({ message: 'Invalid Token' });
    }

    // default to 500 server error
    return res.status(500).json({ message: err.message });
}

