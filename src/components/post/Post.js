import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import img from '../feed/img.PNG'
import { MdOpenInBrowser, MdRepeat, MdVerifiedUser } from "react-icons/md";
import { GrFavorite } from 'react-icons/gr'
import { IoChatbubbleOutline } from 'react-icons/io5'

/* Post will take the values as parameters */
function Post({ avatar, verified, post_text, post_img, postedBy='', createdAt='' }) {

    console.log(postedBy);
    console.log(createdAt);

    return (
        <article className='post'>
            <div className='post_avatar'>
            <Avatar src={avatar} className='avatar'/>
            </div>
            <div className='post_body'>
            {/* post header contains:  name timestamp verified Icon Optional */}
                <div className='post_header'>
                    <h3> {postedBy} {'  '} </h3>
                    <p>{createdAt}</p>
                        <span>
                        {verified && <MdVerifiedUser style={{fontSize:'20px', color:'#50b7f5' }} />}
                        </span>
                </div>
                <div className= 'post_text'>
                    <p>{post_text}</p>
                </div>
                {  post_img && <img src={post_img} alt='post_img' /> }

                <div className= 'post_footer'>
                  <IoChatbubbleOutline className= 'post_icons' />
                  <MdRepeat className= 'post_icons' />
                  <GrFavorite className= 'post_icons' />
                  <MdOpenInBrowser className= 'post_icons' />
                </div>
            </div>
        </article>
    )
}

export default Post
