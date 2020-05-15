const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String, 
        required: true, 
        index: {unique:true}
    },
    material: {type: String, required: true},
    cutting_speed: {type: Number, required: true},
    feed_rate: {type: Number, required: true}
});

// Create if not exists Collection into MongoDB named machining
module.exports = mongoose.model("machining", schema);