const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types//to build relation

const postSchema = new mongoose.Schema({

    post_text: {
        type: String,
        trim: true,
        required: true
    },
    post_img: {
        type: String,
        trim: true,
        required: false
    },
    postedBy : {
        type: ObjectId,
        ref: 'User'
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