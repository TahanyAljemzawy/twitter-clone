import React from 'react'
import Post from '../post/Post'
import './Feeds.css'
import TweetBox from './TweetBox'

function Feed() {
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
            <Post />
            <Post />
            <Post />
             {/* the tweets post */}
              {/* the tweets post */}


        </div>
    )
}

export default Feed
