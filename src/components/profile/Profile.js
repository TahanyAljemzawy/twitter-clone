import React from 'react'
import './Profile.css'
import ProfileHeader from './ProfileHeader'
import Post from '../post/Post'

function Profile() {
    return (
        <div className='profile'>
            <div className='profile__title'>
                <h1>Tahany</h1>
            </div>
            {/* Header */}
            <ProfileHeader />
            {/* Post */}
            <Post />
        </div>
    )
}

export default Profile
