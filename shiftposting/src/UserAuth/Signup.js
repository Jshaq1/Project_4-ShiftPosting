import React from 'react'
import { useState } from 'react';
import { auth } from '../firebase';
import '../css/login-modal.css'




export default function Signup({ triggerSignup, triggerSignIn }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [displayName, setdisplayName] = useState('')
  const [error, setStatusMessage] = useState('')



  const validatePassword = () => {
    if (password !== confirmPassword) {
      setStatusMessage('Passwords do not match')
      return false
    }
    return true
  }


  const formView = (e) => {
    const container = document.getElementById('container')
    setStatusMessage('')
    if (e.target.id === 'signUp') {
      setPassword('')
      container.classList.add('right-panel-active')
    }
    if (e.target.id === 'signIn') {
      setPassword('')
      container.classList.remove('right-panel-active')
    }
  }

  const handleGuestSignIn = (e) => {
    e.preventDefault()
    setStatusMessage('Logging in...')
    triggerSignIn(auth, 'guest@gmail.com', 'Guest1234')
      .then(() => {
        setStatusMessage('Success')
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          setStatusMessage('User does not exist')
          setPassword('')
          const container = document.getElementById('container')
          container.classList.add('right-panel-active')

        }
      })
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    setStatusMessage('Logging in...')
    triggerSignIn(auth, email, password)
      .then(() => {
        setStatusMessage('Success')
      })
      .catch((error) => {
        console.log(error)
        if (error.code === 'auth/user-not-found') {
          setStatusMessage('User does not exist')
          setPassword('')
          const container = document.getElementById('container')
          container.classList.add('right-panel-active')

        }
        if (error.code === 'auth/wrong-password') {
          setStatusMessage('Incorrect Password')
          setPassword('')

        }
      })
  }



  const handleSignUp = (e) => {
    e.preventDefault()
    setStatusMessage('')
    if (validatePassword()) {
      triggerSignup(auth, email, password, displayName)
        .then(() => {
          setStatusMessage('Success')
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            setStatusMessage('Email already in use')
          }
        })
    } else { setStatusMessage('Passwords do not match') }
  }





  return (
    <div id="modal-container">
      <div className="login-container" id="container" data-testid='container'>
        <div className="form-container sign-up-container">
          <form data-testid='loginForm' className="login-form" id="signup" onSubmit={handleSignUp}>
            <h1 className="login-title">Create Account</h1>
            <input data-testid='SignUp-email' type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
            <input data-testid='SignUp-name' type="displayName" placeholder="User Name" required value={displayName} onChange={e => setdisplayName(e.target.value)} />
            <input data-testid='SignUp-password' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <input data-testid='SignUp-confirm' type="password" placeholder="Confirm-Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
            <section id="login-errors">{error ? error : ''}</section>
            <button data-testid='Sign Up' className="login-button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="login-form" id="login" onSubmit={handleSignIn}>
            <h1 className="login-title">Sign in</h1>
            <input type="email" data-testid='email' placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" data-testid='password' placeholder="Password" value={password} required onChange={e => setPassword(e.target.value)} />
            <section data-testid='errors' id="login-errors">{error ? error : ''}</section>
            <button data-testid='Sign In' className="login-button">Sign In</button>
            <button type='button' onClick={handleGuestSignIn} className='guest'>Sign in as <span>Guest</span></button>
          </form>


        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="login-title">Welcome Back!</h1>
              <p className="login-desc">You can never leave</p>
              <button className="login-button outlined" data-testid='Sign-In' id="signIn" onClick={formView}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="login-title">Hello, Friend!</h1>
              <p className="login-desc">Join us..</p>
              <button className="login-button outlined" data-testid='Sign-Up' id="signUp" onClick={formView}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>)
}
