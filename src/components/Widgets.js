import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import {AiOutlineSearch} from 'react-icons/ai'
import './Widgets.css'

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets_input'>
                <AiOutlineSearch className='search_icon' />
                <input type='text' placeholder='Search Twitter'/>
            </div>
            <h1>widgets</h1>
        {/* <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        /> */}    
 
        </div>
    )
}

export default Widgets
