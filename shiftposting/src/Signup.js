import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useRef } from 'react';
import {useAuth} from './Auth'
import { useState } from 'react';

export default function Signup(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const passWordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        if(passwordRef.current.value !== passWordConfirmRef.current.value){
            return setError('Passwords do not match')
        }
        try {
            await signup(emailRef.current.value, passwordRef.current.value)
        }catch {
            setError('Failed to create a user')
        }
        
    }


    return(
    <div>
        {currentUser}
        <form onSubmit={handleSubmit}>
        <FormControl>
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <TextField
          required
          id="email"
          label="email"
        //   value={} 
        //   onChange={}
          size='small'
          margin='dense'
        />
        <TextField
          required
          id="password"
          label="password"
        //   value={} 
        //   onChange={}
          size='small'
          margin='dense'
        />
        <TextField
          required
          id="password-confirm"
          label="password-confirm"
        //   value={} 
        //   onChange={}
          size='small'
          margin='dense'
        />
        </CardContent>
        </Card>
        </FormControl>
        <button type='submit'>Signup</button>
        </form>
    </div>
    )
}