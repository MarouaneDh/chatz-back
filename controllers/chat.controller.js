const ChatRoom = require('../models/ChatRooms')

const createChatRoom = async (req, res) => {
    try {
        const chatRoom = new ChatRoom(req.body);
        await chatRoom.save();
        res.status(201).send({ msg: "Chat room created with success", chatRoom });
    } catch (error) {
        res.status(400).send({ message: "Not able to create chat room" });
    }
};

const updateChatRoom = async (req, res) => {
    const chatRoomId = req.params.id;

    try {
        const { _id, message } = req.body;

        // Update the conversation by pushing the new message
        const chatRoom = await ChatRoom.findByIdAndUpdate(
            chatRoomId,
            {
                $push: { conversation: { _id, message } }
            },
            { new: true } // return the updated document
        );

        if (!chatRoom) {
            return res.status(404).send({ message: "Chat room not found" });
        }

        res.status(200).send(chatRoom);
    } catch (error) {
        res.status(400).send({ message: "Unable to update chat room" });
    }
};

const getChatRoom = async (req, res) => {
    try {
        const result = await ChatRoom.findOne({ _id: req.params.id });
        res.send({ response: result, message: "ChatRoom got with success" });
    } catch (error) {
        res.status(400).send({ message: "there is no ChatRoom with this id" });
    }
};

module.exports = {
    createChatRoom,
    updateChatRoom,
    getChatRoom
}