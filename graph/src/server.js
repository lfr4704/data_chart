const express = require("express");
const http = require("http");
const socketIo = require("socketIo");

//Port from environment variable or default - 4001
const port = process.env.Port || 4001;

//setting up express and adding socketIo middleware
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

//setting up a socket with the namespace "connection" for new sockets
io.on("connection", socket => {
  console.log("New client connected");

  //here we listen on a new namespace called "incoming data"
  socket.on("incoming data", (data) => {
    socket.boradcast.emit("outgoing data", {num: data});
});

//A special namespace "disconnect" for when a client disconnect

server.listen(port, () => console.log(`Listening on port ${port}`))
