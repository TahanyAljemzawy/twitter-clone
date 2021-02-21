import React, { useState } from 'react'
import FileBase from 'react-file-base64';
import { Button, FormLabel, Input } from '@material-ui/core'
import './SignIn.css'
import { SiTwitter } from 'react-icons/si';
import axios from 'axios';

/******************************************* */
function SignUp() {
    const [userData, setuserData] = useState({
        name:'',
        email:'',
        password:'',
        passwordAgain:'',
        avatarImg:'',
        coverImg:'',
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

        
        <div className='Imges-input'>
            <FormLabel>Profile Img </FormLabel>
            <FileBase 
                type= 'file'
                multiple= {false}
                onDone={({base64})=>setuserData({...userData, avatarImg:base64})}
                className='signin-btn'
            />
        </div>
        <div className='Imges-input'>
            <FormLabel>Cover Img </FormLabel>
            <FileBase 
                type= 'file'
                multiple= {false}
                onDone={({base64})=>setuserData({...userData, coverImg:base64})}
                className='signin-btn'
            />  
        </div>
            <Button type='submit' className='signin-btn' onClick={submitHandeler}> Sign up</Button>
       
     </div>
    )
}

export default SignUp
