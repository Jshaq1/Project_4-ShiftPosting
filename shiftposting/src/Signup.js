import React from 'react'
import { app } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';




export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')


    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== '') {
            if (password !== confirmPassword) {
                isValid = false
                setError('Passwords does not match')
            }
        }
        return isValid
    }


    return (
        <div className='center'>
          <div className='auth'>
            <h1>Register</h1>
            {error && <div className='auth__error'>{error}</div>}
            <form name='registration_form'>
              <input 
                type='email' 
                value={email}
                placeholder="Enter your email"
                required
                onChange={e => setEmail(e.target.value)}/>
    
              <input 
                type='password'
                value={password} 
                required
                placeholder='Enter your password'
                onChange={e => setPassword(e.target.value)}/>
    
                <input 
                type='password'
                value={confirmPassword} 
                required
                placeholder='Confirm password'
                onChange={e => setConfirmPassword(e.target.value)}/>
    
              <button type='submit'>Register</button>
            </form>
          </div>
        </div>
      )
    }
    
