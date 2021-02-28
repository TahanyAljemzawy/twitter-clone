const express = require('express');
const mongoose = require('mongoose')
const Post = require('../DBmodels/Post')
const verifyToken= require('../middleware/verifyToken')
const router = express.Router();

router.get('/allpost',verifyToken, async (req, res)=>{
    
    await Post.find()
    .populate('postedBy')//to expands the objectid information if we wont to have only aspecfic data ("postBy","_id name avatar " )

    .then(posts=>{
        res.status(200).json(posts);
    }).catch (error => {
        return res.status(404).json({ message: error.message })
    })
})

router.get('/profilePosts',verifyToken , async (req, res)=>{
    console.log(req.user);
    await Post.find({postedBy:req.user._id})
    .populate('postedBy','_id name createdAt')//to expands the objectid information if we wont to have only aspecfic data ("postBy","_id name avatar " )
    .then(myposts=>{
        res.status(200).json(myposts);
    }).catch (error => {
      return  res.status(404).json({ message: error.message })
    })
})

router.post('/newpost',verifyToken, async (req, res)=>{
    let { post_text, post_img, globalState } = req.body;
  console.log(req.body);
  const newPost = new Post({
        post_text,
        post_img,
        globalState,
        postedBy:req.user
    });
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
      return  res.status(404).json({ message: error.message })
    }
})

module.exports = router;