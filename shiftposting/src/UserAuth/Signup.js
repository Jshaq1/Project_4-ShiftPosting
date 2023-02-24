import React from 'react'
import { app } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState } from 'react';
import { auth } from '../firebase';
import '../css/login-modal.css'




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

  
  const formView = (e) => {
    const container = document.getElementById('container')
    if(e.target.id === 'signUp'){
      container.classList.add('right-panel-active')
    }
    if(e.target.id === 'signIn'){
      container.classList.remove('right-panel-active')
    }
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      }).catch((error) => {
        console.log(error)
      })
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log(userCredential)
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message
    })
  }
  
  const handleSignOut = (e) => {
    e.preventDefault()
    signOut(auth)
    .then(() => {
      console.log('sign out ')
    }).catch(error => console.log(error))
  }

    // return (
    //     <div className='center'>
    //       <div className='sign-in-container'>
    //         <h1>Register</h1>
    //         {error && <div className='auth__error'>{error}</div>}
    //         <form name='registration_form' onSubmit={handleSignUp}>
    //           <input 
    //             type='email' 
    //             value={email}
    //             placeholder="Enter your email"
    //             required
    //             onChange={e => setEmail(e.target.value)}/>
    
    //           <input 
    //             type='password'
    //             value={password} 
    //             required
    //             placeholder='Enter your password'
    //             onChange={e => setPassword(e.target.value)}/>
    
    //             <input 
    //             type='password'
    //             value={confirmPassword} 
    //             required
    //             placeholder='Confirm password'
    //             onChange={e => setConfirmPassword(e.target.value)}/>
    
    //           <button type='submit'>Register</button>
    //         </form>
    //       </div>
    //     </div>
    //   )
    
    return (
    <div id="modal-container">
        <div className="login-container" id="container">
            <div className="form-container sign-up-container">
                <form className="login-form" id="signup" onSubmit={handleSignUp}>
                    <h1 className="login-title">Create Account</h1>
                    <input name="email" type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
                    <input name="password" type="password" placeholder="Password" value={password}  onChange={e => setPassword(e.target.value)} required />
                    <input name="confirm-password" type="password" placeholder="Confirm-Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}required />
                    <section id="errors"></section>
                    <button className="login-button">Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form className="login-form" id="login" onSubmit={handleSignIn}>
                    <h1 className="login-title">Sign in</h1>
                    <input type="email" name='email' placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}required />
                    <input type="password" name='password' placeholder="Password" value={password} required onChange={e => setPassword(e.target.value)}/>
                    <section id="login-errors"></section>
                    <button className="login-button">Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1 className="login-title">Welcome Back!</h1>
                        <p className="login-desc">Already have a account?</p>
                        <button className="login-button outlined" id="signIn" onClick={formView}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className="login-title">Hello, Friend!</h1>
                        <p className="login-desc">Lets get you organised!</p>
                        <button className="login-button outlined" id="signUp" onClick={formView}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}