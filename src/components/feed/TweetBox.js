import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import { BiHappyAlt, BiImage, BiPoll, BiWorld } from 'react-icons/bi'
import { AiOutlineGif } from 'react-icons/ai'
import './TweetBox.css'
import img from './img.PNG'
/***************************************************** */
function TweetBox() {
    return (
        <div className='tweet_box'>
            <form className='tweet_form'>
                {/*smull circle photo Avatar */}
                <Avatar src={img} className='avatar'/>
                {/*input box to write tweet */}
                <input className='tweet_input' type='text' placeholder="What's happening?" maxLength='280' />
                
            </form> 
           {/*Upload img icon */}
           <div className='tweetBox_footer'>
                <div className='logo_section'>
            
                    <BiWorld  className='tweetBox_logos' />
                    <BiImage className='tweetBox_logos' />
                    <AiOutlineGif  className='tweetBox_logos' />
                    <BiPoll  className='tweetBox_logos' />
                    <BiHappyAlt  className='tweetBox_logos' />
                </div>
            <Button className='tweet_btn'>Tweet</Button>     
        </div>
    </div>
    )
}

export default TweetBox
