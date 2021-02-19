const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema

const postSchema = new mongoose.Schema({
    userId: {
        type: Number,
        trim: true,
        required: true
    },
    avatar: {
        type: String,
        trim: true,
        required: true
    },
    post_text: {
        type: String,
        trim: true,
        required: true
    },
    post_img: {
        type: String,
        trim: true,
        required: true
    },
    userName : {
        type:String
    },
    tags: [],
    likeCount : {
        type : Number,
        default : 0
    },
    retweetCount : {
        type : Number,
        default : 0
    },
    createdAt : {
        type : Date,
        default: new Date(),
    },
    globalState : {
        type : Boolean,
        default: true,
    },
}, {timestamps: true});

module.exports =mongoose.model('Post', postSchema);