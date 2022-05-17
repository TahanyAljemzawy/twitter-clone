import React from 'react'
import './Profile.css'
import ProfileHeader from './ProfileHeader'
import Post from '../post/Post'
import Layout from '../layout/layout'

function Profile() {
    return (
        <Layout>
        <div className='profile'>
            <div className='profile__title'>
                <h1>Tahany</h1>
            </div>
            {/* Header */}
            <ProfileHeader />
            {/* Post */}
            <Post />
            <Post />
            <Post />
        </div>
        </Layout>
    )
}

export default Profile
