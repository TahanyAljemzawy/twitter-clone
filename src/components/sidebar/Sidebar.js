import React from 'react'
import {SidebarData} from './SidebarData'
import './Sidebar.css'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {SiTwitter} from 'react-icons/si'
import { TweetBtnIcon } from './tweetBtnIcon'

function Sidebar() {
	return (
		<div className='sidebar' >

			<ul >
				{SidebarData.map((item, index)=>{
					return(
						<li key={index}>
						  <Link to={item.path}  className={item.cName}>
								<span  className='sidebar__Icon'> {item.icon}</span>
								<h1>{item.title}</h1>
						  </Link>
						</li>
					)
				})}
				<li>
		 {/*Tweet Button */}
				<Button variant="outlined" fullWidth className='sidebar__tweetBtn'>
					<span className='small_tweetBtn'> Tweet</span>
					<TweetBtnIcon className='tweetBtnIcon'/>
				 </Button>
				</li>
			</ul>

		</div>
	)
}

export default Sidebar;
