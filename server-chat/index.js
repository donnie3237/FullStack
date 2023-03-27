const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// handle socket connections
io.on('connection', (socket) => {
  console.log('A user connected');
  
  // handle messages from the client
  socket.on('message', (data) => {
    console.log('Received message:', data);
    
    // broadcast the message to all connected clients
    io.emit('message', data);
  });
  
  // handle disconnections
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// start the server
const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
