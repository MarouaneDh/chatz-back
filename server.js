const express = require('express')
const http = require('http')
const cors = require('cors');
require("dotenv").config();
const dbConnect = require("./config/connectDB");
const { Server } = require('socket.io')

const userRouter = require("./routes/users");
const chatRouter = require("./routes/chat");
const authRouter = require("./routes/auth");

const app = express()
const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || '0.0.0.0';

app.use(cors())
app.use(express.json());

// connect DB
dbConnect();

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    socket.on("join_room", (room) => {
        socket.join(room)
    })

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data.message);
    });
})

server.listen(PORT, HOST, () => {
    console.log("server running on " + PORT + "...")
})

app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("/api/auth", authRouter);