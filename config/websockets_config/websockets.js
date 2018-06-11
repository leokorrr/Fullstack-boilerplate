var socket = require('socket.io');

var server = require('../../server');

var io = socket(server.server);

io.on('connection', (socket)=>{
    console.log('socket connected', socket.id);

    socket.on('chat', (data)=>{
        io.sockets.emit('chat', data);
    });

    socket.on('typing', (data)=>{
        socket.broadcast.emit('typing', data);
    });

})