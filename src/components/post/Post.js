import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import img from '../feed/img.PNG'
import { MdOpenInBrowser, MdRepeat, MdVerifiedUser } from "react-icons/md";
import { GrFavorite } from 'react-icons/gr'
import { IoChatbubbleOutline } from 'react-icons/io5'

/* Post will take the values as parameters */
function Post({ userName, verified, text, person_img }) {
    return (
        <div className='post'>
            <div className='post_avatar'>
            <Avatar src={img} className='avatar'/>
            </div>
            <div className='post_body'>
            {/* post header contains:  name timestamp verified Icon Optional */}
                <div className='post_header'>
                    <h3>Tahany Momo {'  '}
                        <span><MdVerifiedUser style={{fontSize:'20px', color:'#50b7f5' }} /></span>
                    </h3>
                </div>
                <div className= 'post_text'>
                    <p>hallo my name is tahany and this is my first tweet</p>
                </div>
                    <img src={img} alt='post_img' />
                <div className= 'post_footer'>
                    <IoChatbubbleOutline className= 'post_icons' />
                    <MdRepeat className= 'post_icons' />
                    <GrFavorite className= 'post_icons' />
                    <MdOpenInBrowser className= 'post_icons' />
                </div>
            </div>
        </div>
    )
}

export default Post