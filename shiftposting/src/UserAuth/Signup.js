import React from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useState } from 'react';
import { auth } from '../firebase';
import '../css/login-modal.css'




export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [displayName, setdisplayName] = useState('')
  const [error, setError] = useState('')



  const validatePassword = () => {
      if (password !== confirmPassword) {
        setError('Passwords does not match')
        return false
      }
    return true
  }


  const formView = (e) => {
    const container = document.getElementById('container')
    setError('')
    if (e.target.id === 'signUp') {
      setPassword('')
      container.classList.add('right-panel-active')
    }
    if (e.target.id === 'signIn') {
      setPassword('')
      container.classList.remove('right-panel-active')
    }
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    setError('Logging in...')
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError('Success!')
      }).catch((error) => {
        if (error.code === 'auth/user-not-found'){
          setError('User does not exist')
          setPassword('')
          const container = document.getElementById('container')
          container.classList.add('right-panel-active')

        }
      })
  }

  

  const handleSignUp = (e) => {
    e.preventDefault()
    setError('')
    if (validatePassword()) {
      createUserWithEmailAndPassword(auth, email, password)
      .then(response => {
        updateProfile(auth.currentUser, {
          displayName: displayName
        })
        setError('Success')
      })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            setError('Email already in use')
          }
        })
    } else { setError('Passwords do not match') }
  
  }





  return (
    <div id="modal-container">
      <div className="login-container" id="container">
        <div className="form-container sign-up-container">
          <form className="login-form" id="signup" onSubmit={handleSignUp}>
            <h1 className="login-title">Create Account</h1>
            <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
            <input type="displayName" placeholder="User Name" required value={displayName} onChange={e => setdisplayName(e.target.value)} />
            <input  type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <input  type="password" placeholder="Confirm-Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
            <section id="login-errors">{error ? error : ''}</section>
            <button className="login-button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="login-form" id="login" onSubmit={handleSignIn}>
            <h1 className="login-title">Sign in</h1>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password"  placeholder="Password" value={password} required onChange={e => setPassword(e.target.value)} />
            <section id="login-errors">{error ? error : ''}</section>
            <button className="login-button">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="login-title">Welcome Back!</h1>
              <p className="login-desc">You can never leave</p>
              <button className="login-button outlined" id="signIn" onClick={formView}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="login-title">Hello, Friend!</h1>
              <p className="login-desc">Join us..</p>
              <button className="login-button outlined" id="signUp" onClick={formView}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>)
}