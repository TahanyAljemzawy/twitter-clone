import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import './Feeds.css'
import TweetBox from './TweetBox'
import db from '../../backend/firebase'
function Feed() {
    const [posts, setPosts]=useState([]); // to set the new post
    //load the posts from the db
    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc => doc.data() ))
        ))
    },[])
    console.log(posts)
    return (
        <div className='feed'>
            {/*the fix Header contains Home*/}
            <div className='feed__header'>
                <h1>Home</h1>
            </div>
            {/*the tweet box which contains tweet button */}
            <div>
                <TweetBox />
            </div>

            {/* Tahany you need to add id for each post wich wiil link the post with the owner and the post wil have it's own id */}
            {posts.map(post=>{
                return (
                    <Post
                    userName = {post.userName}
                    avatar = {post.avatar}
                    verified = {post.verified}
                    post_text= {post.post_text}
                    post_img = {post.post_img}
                    />
               
                )
            })}
        </div>  
    )
}

export default Feed
