import React from 'react';
import { IoMdPerson } from 'react-icons/io'
import { BiHomeCircle, BiBell, BiBookmark, BiDetail, BiEnvelope, BiHash } from 'react-icons/bi'
import {CgMoreO} from 'react-icons/cg'
import {SiTwitter} from 'react-icons/si'
/************************************* */

export const SidebarData = [
    {
        icon :<SiTwitter/>,
        title:'',
        path :'/',
        cName:'sidebar__twitterIcon',
    },
    {
        icon :<BiHomeCircle />,
        title:'Home',
        path :'/',
        cName:'sidebarOption',
    },
    {
        icon :<BiHash />,
        title:'Explore',
        path :'',
        cName:'sidebarOption',
    },
    {
        icon :<BiBell />,
        title:'Notification',
        path :'',
        cName:'sidebarOption',
    },
    {
        icon :<BiEnvelope />,
        title:'Messages',
        path :'',
        cName:'sidebarOption',
    },
    {
        icon :<BiBookmark />,
        title:'Bookmarks',
        path :'',
        cName:'sidebarOption',
    },
    {
        icon :<BiDetail />,
        title:'Lists',
        path :'',
        cName:'sidebarOption',
    },
    {
        icon :<IoMdPerson />,
        title:'Profile',
        path :'/profile',
        cName:'sidebarOption',
    },
    {
        icon :<CgMoreO />,
        title:'More',
        path :'',
        cName:'sidebarOption',
    },
]