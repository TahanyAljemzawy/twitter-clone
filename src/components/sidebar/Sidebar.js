import React from 'react'
import {SidebarData} from './SidebarData'
import './Sidebar.css'
import { Button } from '@material-ui/core'
import {SiTwitter} from 'react-icons/si'

function Sidebar() {
    return (
        <div  >
            <SiTwitter className='sidebar__twitterIcon'/>
            <ul className='sidebar'>
                {SidebarData.map((item, index)=>{
                    return(
                        <li key={index} className={item.cName}>
                          <span  className='sidebar__Icon'> {item.icon}</span>
                            <h1>{item.title}</h1>

                        </li>
                    )
                })}
                <li>
         {/*Tweet Button */}
                <Button variant="outlined" className="sidebar__tweet" fullWidth>
                       Tweet
                 </Button>
                </li>
            </ul> 
         
        </div>
    )
}

export default Sidebar;
