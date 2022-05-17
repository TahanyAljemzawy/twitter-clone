import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import './Feeds.css'
import TweetBox from './TweetBox'
import db from '../../backend/firebase'
import axios from 'axios'
import Layout from '../layout/layout'
function Feed() {
    const [userId, setUserId] = useState('');
    const [avatar, setAvatar] = useState('');
    const [userName, setuserName] = useState('')
    const [posts, setPosts]=useState([]); // to set the new post
    //load the posts from the db
    useEffect( async ()=>{
        try {
            let result = await axios.get('http://localhost:8000/posts/allpost',
            { headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }})
            setPosts(result.data)
            console.log(posts);
           // localStorage.setItem('token',result.data.token)

        } catch (error) {
            console.log(error.data)
        }
    },[])
  console.log(posts)
    return (
        <Layout>
        <div className='feed'>
            {/*the fix Header contains Home*/}
            <div className='feed__header'>
                <h1>Home</h1>
            </div>
            {/*the tweet box which contains tweet button */}
            <div>
                <TweetBox avatar = {avatar} userId = {userId} userName = {userName}/>
            </div>

            {/* Tahany you need to add id for each post wich wiil link the post with the owner and the post wil have it's own id */}
            {posts.map(post=>{
                return (
                    <Post
                    key = {post._id}
                    userName = {post.userName}
                    avatar = {post.avatar}
                    verified = {post.verified}
                    post_text= {post.post_text}
                    post_img = {post.post_img}
                    postedBy = {post.postedBy}
                    createdAt = {post.createdAt}
                    />

                )
            })}
        </div>
        </Layout>
    )
}

export default Feed
