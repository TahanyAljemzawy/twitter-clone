import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './ProfileHeader.css'
import userImg from './userImg.PNG'
import profileCover from './cover.jpeg'


function ProfileHeader() {
    return (
        <div className='header'>
            {/* Background img */}
            <div className='header_img'>
            
            </div>
            {/* user img + btn follow/unFllow for others || Edit profile for user */}
            <div className='header_userImg'>
            <Avatar src={userImg} className='userImg'/>
           
            <Button className='update-btn'>Follow</Button>
            </div>
            {/* user name */}
            <h3>Tahany Darmusleh</h3>
            {/* bio */}
            <p>The life is alweyse hard so don't be like the glass</p>
            {/* joining day */}
            <h4>12/12/2021</h4>
            {/* number of following  +  num of follower */}
            <div className='followers'>
                <h4>following 6</h4>
                <h4>followers 1</h4>
            </div>
            
            <div className='header_filter'>
                <h4>Tweets</h4>
                <h4> Tweets and replies</h4>
                <h4> Media</h4>
                <h4> and Likes</h4>
            </div>
            {/* Filter choices  */}
        </div>
    )
}

export default ProfileHeader
