const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

var schema = new mongoose.Schema({
    name: String,
    lastPlay : String,
    lastRank : String,
    duration :String
})

const users_game = mongoose.model('users_game', schema);

var schema = new mongoose.Schema({
    name : String,
    skor : String,
    rank : String
})

const users_history = mongoose.model('users_history', schema);

module.exports = Userdb, users_game, users_history;