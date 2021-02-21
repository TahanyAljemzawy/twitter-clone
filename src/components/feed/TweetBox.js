import React, { useState } from 'react'
import { Avatar, Button, Input } from '@material-ui/core'
import { BiHappyAlt, BiImage, BiPoll, BiWorld } from 'react-icons/bi'
import { AiOutlineGif } from 'react-icons/ai'
import './TweetBox.css'
import imge from './img.PNG'
import FileBase from 'react-file-base64';
import axios from 'axios'
/***************************************************** */
function TweetBox({ avatar, userId, userName }) {

    const [postData, setpostData] = useState({
        post_text:'',
        post_img:'',
        globalState: true,
        })
    const [img, setimg] = useState('')    
   
        const postDetails = async(e) =>{
            e.preventDefault();
            const data = new FormData()
            data.append("file",img)
            data.append("upload_preset","twitter")            
            data.append("cloud_name","tahany")

            fetch("https://api.cloudinary.com/v1_1/tahany/image/upload",{
                method:"post",
                body:data
            }).then(response => response.json())
            .then(data=>{
                setpostData({...postData, post_img:data.url})
                console.log(postData.post_img);
            })
            .catch(err=>{
                console.log(err)
            })
            try {
                let result = await axios.post('http://localhost:8000/posts/newpost',postData)
                console.log(result);
               // localStorage.setItem('token',result.data.token)
    
            } catch (error) {
                console.log(error.response.data.msg)
            }    
         
        }
    return (
        <div className='tweet_box'>
            <form className='tweet_form'>
                {/*smull circle photo Avatar */}
                <Avatar src={imge} className='avatar'/>
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
               
                
                 <Button className='tweet_btn' onClick={postDetails}>Tweet</Button>
                 <Input type="file" className='tweetBox_logos' onChange={(e)=>setimg(e.target.files[0])}/>
      </div>
        </div>
                   
    </div>
    )
}

export default TweetBox
