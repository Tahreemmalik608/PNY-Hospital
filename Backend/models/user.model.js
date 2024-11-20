const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    otpCode: {
        type: Number
    }
},
 { timestamps: true }); // Corrected here

const User = mongoose.model("User", userSchema); // Create the model

module.exports = User; // Export the model
