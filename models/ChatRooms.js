const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatMembersType = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
});

const conversationType = new mongoose.Schema({
    memberId: { type: String, required: true },
    message: { type: String, required: true }
});

const ChatRoomSchema = new Schema({
    _id: { type: String, required: true },
    chatMembers: { type: [chatMembersType], required: true },
    conversation: { type: [conversationType], required: true },
    created_at: { type: Date },
    updated_at: { type: Date }
}, { timestamps: true });

module.exports = ChatRoom = mongoose.model("ChatRoom", ChatRoomSchema);