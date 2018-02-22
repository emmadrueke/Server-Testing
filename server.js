const express = require('express');
const bodyParser = require('body-parser');
const Food = require('./food');
const morgan = require('morgan');


const server = express();
server.use(bodyParser.json());
server.use(morgan('combined'));
//What is Morgan??

module.exports = server;



