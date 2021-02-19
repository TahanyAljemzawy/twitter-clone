import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core'
import { BiHappyAlt, BiImage, BiPoll, BiWorld } from 'react-icons/bi'
import { AiOutlineGif } from 'react-icons/ai'
import './TweetBox.css'
import img from './img.PNG'
import FileBase from 'react-file-base64';
import axios from 'axios'
/***************************************************** */
function TweetBox({ avatar, userId, userName }) {

    const [postData, setpostData] = useState({
        post_text:'',
        post_img:'',
        globalState:'',
    })
    const sendPost = async ()=>{
        try {     
            await axios.post("http://localhost:8000/posts/new", postData);
           } catch (error) {
              console.log(error)
              }  
        console.log(postData)
    }
    return (
        <div className='tweet_box'>
            <form className='tweet_form'>
                {/*smull circle photo Avatar */}
                <Avatar src={img} className='avatar'/>
                {/*input box to write tweet */}
                <input className='tweet_input' type='text' placeholder="What's happening?" maxLength='280'  onChange={(e)=>setpostData({...postData, post_text:e.target.value})}/>
                
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
                
            <Button className='tweet_btn' onClick={sendPost}>Tweet</Button>     
        </div>
        <FileBase 
                        type= 'file'
                        multiple= {false}
                        onDone={({base64})=>setpostData({...postData, post_img:base64})}
                    />
    </div>
    )
}

export default TweetBox
