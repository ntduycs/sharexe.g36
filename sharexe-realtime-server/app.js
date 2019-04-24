const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const socketIO = require('./socketIO');

const PORT = process.env.PORT || 4000;

socketIO(server);

server.listen(PORT, () => {
    console.log(`Listenning on port ${PORT}`);
});