import React from 'react'
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
        </div>
    )
}

export default Widgets
