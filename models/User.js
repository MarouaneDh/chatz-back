const mongoose = require("mongoose");

const schema = mongoose.Schema;

const friendType = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    _id: { type: String, required: true },
});

const userSchema = new schema({
    role: {
        type: String,
        require: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: false
    },
    friends: {
        type: [friendType],
        required: true
    },
    created_at: { type: Date },
    updated_at: { type: Date }
}, { timestamps: true });
module.exports = User = mongoose.model("User", userSchema);