const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transectionSchema = new Schema({
    senderid: {
        type: String
    },
    receiverid: {
        type: String
    },
    sendername: {
        type: String
    },
    receivername: {
        type: String
    },
    amount: {
        type: Number
    },
    acoutbalance: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    },
    status:{
        type:String
    },
    unique:{
        type:String
    }
})

const Transection = mongoose.model('Transection', transectionSchema);

module.exports = Transection;