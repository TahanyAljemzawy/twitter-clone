import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './ProfileHeader.css'
import userImg from './userImg.PNG'
import profileCover from './cover.jpeg'
import {BsCalendar} from 'react-icons/bs'

function ProfileHeader() {
    return (
        <div className='header'>
            {/* Background img */}
            <div className='header_img'>
            
            </div>
            {/* user img + btn follow/unFllow for others || Edit profile for user */}
            <div className='header_info'>  
            <div className='header_userImg'>
            <Avatar src={userImg} className='userImg'/>
           
            <Button className='update-btn'>Follow</Button>
            </div>
            
                <h3>Sun</h3>
                <p>The life is alweyse hard so don't be like the glass</p>
                <h4><BsCalendar /> 12/12/2021</h4>
                <div className='followers'>
                    <h4>Following 6</h4>
                    <h4>Followers 1</h4>
                </div>
                
                <div className='header_filter'>
                    <h4>Tweets</h4>
                    <h4> Tweets and replies</h4>
                    <h4> Media</h4>
                    <h4> Likes</h4>
                </div>
            </div>
            {/* Filter choices  */}
        </div>
    )
}

export default ProfileHeader
