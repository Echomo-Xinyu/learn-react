const webSocket = require("ws");

const webSocketServer = new webSocket.Server({
  port: 4000,
});

webSocketServer.on('connection', (connection) => {
  // connection established
  connection.on('message', (message) => {
    // webSocketServer receives a message
    console.log("Message received", message);

    broadcast(message);
  })
})

function broadcast(message) {
  webSocketServer.clients.forEach((client) => {
    client.send(message);
  });
}
