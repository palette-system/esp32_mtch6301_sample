'use strict';

// setup
const serverPort = 3000;
const comPort = 'COM5';

// file system
const fs = require('fs');

// serial port settings
const SerialPort = require('serialport');
const port = new SerialPort(comPort,{ baudRate: 115200 });

// socket.io server setup
var app = require('http').createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync('index.html'));
}).listen(serverPort);
var io = require('socket.io')(app);


port.on('open', () => {
    console.log('Open ' + comPort);
});
port.on('data', (data) => {
    console.log(data.toString());
    io.sockets.emit('raw', data.toString());
});

