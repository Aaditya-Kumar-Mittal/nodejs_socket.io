# 🔌 Real-Time Communication with Socket.IO in Node.js

## 🛡️ Technology Stack

![Node.js](https://img.shields.io/badge/Node.js-green?style=for-the-badge&logo=node.js&logoColor=green&label=Platform) ![Express.js](https://img.shields.io/badge/Express.js-lightgreen?style=for-the-badge&logo=express&logoColor=lightgreen&label=Framework) ![Socket.IO](https://img.shields.io/badge/Socket.IO-25c2a0?style=for-the-badge&logo=socket.io&logoColor=25c2a0&label=Real-Time) ![JavaScript](https://img.shields.io/badge/JavaScript-FFF44F?style=for-the-badge&logo=javascript&logoColor=black&label=Language) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white&label=Frontend)

---

## 📑 Table of Contents

- [🔌 Real-Time Communication with Socket.IO in Node.js](#-real-time-communication-with-socketio-in-nodejs)
  - [🛡️ Technology Stack](#️-technology-stack)
  - [📑 Table of Contents](#-table-of-contents)
  - [📌 Introduction](#-introduction)
  - [🚀 Features](#-features)
  - [📂 Project Structure](#-project-structure)
  - [🔗 Technologies Used](#-technologies-used)
  - [🌐 WebSocket Communication](#-websocket-communication)
    - [Connection Flow](#connection-flow)
  - [📤 Server to Client Event](#-server-to-client-event)
    - [Server (Node.js)](#server-nodejs)
    - [Client (Browser - `client.js`)](#client-browser---clientjs)
  - [📥 Client to Server Event](#-client-to-server-event)
    - [Server.js (Node.js)](#serverjs-nodejs)
  - [🧪 Testing with Browser](#-testing-with-browser)
  - [📦 Installation \& Run Locally](#-installation--run-locally)
  - [📄 License](#-license)

---

## 📌 Introduction

This project demonstrates real-time, event-based communication using **Socket.IO**, enabling **bidirectional** communication between the **server** and **clients** over WebSocket protocol.

It’s ideal for use cases like:

- Chat applications
- Live notifications
- Real-time dashboards
- Collaborative tools

---

## 🚀 Features

- ⚡ Real-time, low-latency communication
- 🔄 Bidirectional messaging
- 📡 WebSocket connection events (`connect`, `disconnect`)
- 🔔 Custom events (`message`, `notification`, etc.)
- 📊 Scalable architecture with socket broadcasting

---

## 📂 Project Structure

```bash
socketio-real-time/
│
├── server.js             # Entry point, sets up Express + Socket.IO
├── public/
│   ├── index.html        # Frontend client interface
└── package.json          # Project metadata
```

---

## 🔗 Technologies Used

| Category  | Tools              |
| --------- | ------------------ |
| Backend   | Node.js, Express   |
| Real-time | Socket.IO          |
| Frontend  | HTML, JavaScript   |
| Dev Tools | Nodemon (optional) |

---

## 🌐 WebSocket Communication

- A **WebSocket connection** is established when the client connects to the server.
- Upon connection, both the server and client can **emit** and **listen** to events.

### Connection Flow

```plaintext
Client Browser <=======> Server (Node.js + Socket.IO)
```

- `connect`: Fired when a client connects
- `disconnect`: Fired when a client leaves
- `emit`: Trigger a custom event
- `on`: Listen for an event

---

## 📤 Server to Client Event

### Server (Node.js)

```js
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  // Emit message to client
  socket.emit("welcome", "Hello from the server!");
});
```

---

### Client (Browser - `client.js`)

```js
const socket = io();

// Listen for server's event
socket.on("welcome", (msg) => {
  console.log("Server says:", msg);
});
```

---

## 📥 Client to Server Event

```js
socket.emit("chatMessage", "Hello Server!");
```

---

### Server.js (Node.js)

```js
io.on("connection", (socket) => {
  socket.on("chatMessage", (msg) => {
    console.log("Client says:", msg);
  });
});
```

---

## 🧪 Testing with Browser

1. Start your server:

   ```bash
   node server.js
   ```

2. Open `public/index.html` in the browser.

3. Check browser console for messages.

4. Observe terminal logs when a client connects or sends data.

---

## 📦 Installation & Run Locally

```bash
git clone https://github.com/your-username/socketio-real-time.git
cd socketio-real-time
npm install
node server.js
```

Then open `http://localhost:3000` in your browser.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
