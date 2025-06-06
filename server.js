const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);

// Initiate socket.io and attach it to the htpp server
const io = socketio(server);

// Serve the static files
app.use(express.static("public"));

// Create a connection

const users = new Set();

io.on("connection", (socket) => {
  console.log("A user is now connected!");

  // Handle users when they will join the chat
  socket.on("join", (username) => {
    users.add(username);

    // Once user has joined, store the username in socket object
    socket.userName = username;

    // Broadcast To all Clients/Users that a new user has joined
    io.emit("userJoined", username);

    // Send the updated list of userse to all Clients
    io.emit("userList", Array.from(users));
  });

  // Handle incoming chat messages

  // Get the message from client side and listen ot on the server
  socket.on("chatMessage", (message) => {
    // One user will write the message and you have to show it to all the users, brodacast the message to all the connected Clients

    io.emit("chatMessage", message);
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    console.log(`${socket.userName} has left the chat`);

    users.delete(socket.userName); // Remove from Set

    // Broadcast to all that user has left
    io.emit("userLeft", socket.userName);

    // Send updated user list
    io.emit("userList", Array.from(users));
  });
});

const port = 3000;

server.listen(port, () => console.log(`Server is running on port ${port}`));
