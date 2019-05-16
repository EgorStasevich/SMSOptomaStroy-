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

