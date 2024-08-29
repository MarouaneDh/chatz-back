const express = require("express");
const router = express.Router();
const isAuth = require('../middlewares/isAuth')
const { createChatRoom, updateChatRoom } = require("../controllers/chat.controller");

//POST
//adding new chat room
//PATH:http://localhost:4000/api/chat
router.post("/", isAuth, createChatRoom);

//POST
//adding new chat room
//PATH:http://localhost:4000/api/chat/:id
//Params id body
router.patch("/:id", isAuth, updateChatRoom);

module.exports = router;