const net = require('net');

const client = new net.Socket();

const HOST = 'localhost'; // Change this to the server's IP or hostname
const PORT = 4000;

client.connect(PORT, HOST, () => {
  console.log('Connected to server!');

  // Send data to the server
  client.write('Hello from the client!');
});

// Handle data received from the server
client.on('data', (data) => {
  console.log(`Received data from server: ${data}`);
  // You can process the data here as needed
});

// Handle server disconnection
client.on('close', () => {
  console.log('Connection closed.');
});
