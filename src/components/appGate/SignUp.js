import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import './SignIn.css'
import { SiTwitter } from 'react-icons/si';
import axios from 'axios';
import { useHistory } from "react-router-dom";

/******************************************* */

function SignUp() {
    const history = useHistory()
    const [userData, setuserData] = useState({
        username:'',
        email:'',
        password:'',
        passwordAgain:'',
      //  avatarImg:'',
      //  coverImg:'',
        bio: '',
    })

    const [err , setErr] = useState()

    const reset = ()=>{
        setuserData('')
    }

    const submitHandeler = async (e)=>{
        e.preventDefault();
        console.log('hhh');
        try {
            let result = await axios.post('http://localhost:3000/api/v1/signup',userData)
            console.log(result);
            history.push('/signin')
            reset()
        } catch (error) {
            setErr(error.response.data.msg)
            reset()
        }

    }
    return (
        <div className='card'>
             <SiTwitter className='twitter-Icon'/>
             <p>{err}</p>
            <input type='text' className='input-field' required placeholder='User Name' onChange={(e)=>setuserData({...userData, username:e.target.value})}/>
            <input type='email' className='input-field' required placeholder='User Email' onChange={(e)=>setuserData({...userData, email:e.target.value})}/>
            <input type='text' className='input-field' required placeholder='User Password' onChange={(e)=>setuserData({...userData, password:e.target.value})}/>
            <input type='text' className='input-field' required placeholder='Verify Password' onChange={(e)=>setuserData({...userData, passwordAgain:e.target.value})}/>
            <input type='text' className='input-field' required placeholder='pio' onChange={(e)=>setuserData({...userData, bio:e.target.value})}/>


            <Button type='submit' className='signin-btn' onClick={submitHandeler}> Sign up</Button>

     </div>
    )
}

export default SignUp
