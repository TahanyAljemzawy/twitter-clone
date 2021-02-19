const express = require('express');
const Post = require('../DBmodels/Post')

const router = express.Router();

router.get('/', async (req, res)=>{
    try {
        let post = await Post.find();
        console.log(post);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

router.post('/new', async (req, res)=>{
    let post = req.body;
  
    const newPost = new Post(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

module.exports = router;