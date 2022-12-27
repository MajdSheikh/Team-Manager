const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String,      
        required: [true, "Name is required"],
        minlength: [2, "A name should be at least three characters."]
     },
     position: { 
        type: String,      
        optional: [true, "position is required"],
        minlength: [3, "A position should be at least three characters."]
     },
     status: { type: String
     }
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);

