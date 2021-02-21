import React, { useState } from 'react'
import FileBase from 'react-file-base64';
import { Button, FormLabel, Input } from '@material-ui/core'
import './SignIn.css'
import { SiTwitter } from 'react-icons/si';
import axios from 'axios';
import { useHistory } from "react-router-dom";

/******************************************* */

function SignUp() {
    const history = useHistory()
    const [userData, setuserData] = useState({
        name:'',
        email:'',
        password:'',
        passwordAgain:'',
      //  avatarImg:'',
      //  coverImg:'',
        pio: '',
    })
    
    const [err , setErr] = useState()

    const reset = ()=>{
        setuserData('')
    }
    
    const submitHandeler = async (e)=>{
        e.preventDefault();
        
        try {
            let result = await axios.post('http://localhost:8000/api/register',userData)
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
            <Input type='text' className='input-field' required placeholder='User Name' onChange={(e)=>setuserData({...userData, name:e.target.value})}/>
            <Input type='email' className='input-field' required placeholder='User Email' onChange={(e)=>setuserData({...userData, email:e.target.value})}/>
            <Input type='text' className='input-field' required placeholder='User Password' onChange={(e)=>setuserData({...userData, password:e.target.value})}/>
            <Input type='text' className='input-field' required placeholder='Verify Password' onChange={(e)=>setuserData({...userData, passwordAgain:e.target.value})}/>
            <Input type='text' className='input-field' required placeholder='pio' onChange={(e)=>setuserData({...userData, pio:e.target.value})}/>

      
            <Button type='submit' className='signin-btn' onClick={submitHandeler}> Sign up</Button>
       
     </div>
    )
}

export default SignUp
