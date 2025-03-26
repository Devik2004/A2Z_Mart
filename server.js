// // 2, Write a program in JS that creates socket client and socket server to exchange messages over a network
// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();

// app.use(express.json()); 

// app.get("/", (req,res) => {
//     res.send("hello");
// });
//  

// app.listen(4000, () => {

//     console.log("Server is running on port 4000");
// })
// const net = require('net');
const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected!');

  // Handle incoming data from the client
  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);
    //process the data here and send a response back to the client
    socket.write('Hello from the server!');
  });

  // Handle client disconnection
  socket.on('end', () => {
    console.log('Client disconnected.');
  });
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
