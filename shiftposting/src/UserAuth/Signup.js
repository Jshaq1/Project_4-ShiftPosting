import { useState } from 'react'
import { auth } from '../firebase'
import '../css/login-modal.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'

const getAuthErrorMessage = (errorCode) => {
  switch (errorCode) {
    case 'auth/user-not-found':
      return 'User does not exist'
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Incorrect email or password'
    case 'auth/invalid-email':
      return 'Invalid email address'
    case 'auth/too-many-requests':
      return 'Too many attempts. Please try again later.'
    case 'auth/email-already-in-use':
      return 'Email already in use'
    case 'auth/weak-password':
      return 'Password is too weak'
    default:
      return 'Something went wrong. Please try again.'
  }
}

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)

  const validatePassword = () => {
    const passWordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/
    if (!passWordReg.test(password)) {
      setStatusMessage('Password must be at least 6 characters with uppercase, lowercase, and a number')
      return false
    }
    if (password !== confirmPassword) {
      setStatusMessage('Passwords do not match')
      return false
    }
    return true
  }

  const formView = (e) => {
    setStatusMessage('')
    setPassword('')
    setIsSignUp(e.target.id === 'signUp')
  }

  const handleGuestSignIn = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatusMessage('Logging in...')
    signInWithEmailAndPassword(auth, process.env.REACT_APP_GUEST_EMAIL, process.env.REACT_APP_GUEST_PASSWORD)
      .then(() => {
        setStatusMessage('Success')
      })
      .catch((error) => {
        setStatusMessage(getAuthErrorMessage(error.code))
      })
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    setStatusMessage('Logging in...')
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setStatusMessage('Success')
      })
      .catch((error) => {
        setStatusMessage(getAuthErrorMessage(error.code))
        if (error.code === 'auth/user-not-found') setIsSignUp(true)
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') setPassword('')
      })
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    setStatusMessage('')
    if (!validatePassword()) return

    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        return updateProfile(response.user, { displayName })
      })
      .then(() => {
        setStatusMessage('Success')
      })
      .catch((error) => {
        setStatusMessage(getAuthErrorMessage(error.code))
      })
  }

  return (
    <div id="modal-container">
      <div className={`login-container${isSignUp ? ' right-panel-active' : ''}`} data-testid='container'>
        <div className="form-container sign-up-container">
          <form data-testid='loginForm' className="login-form" id="signup" onSubmit={handleSignUp}>
            <h1 className="login-title">Create Account</h1>
            <input data-testid='SignUp-email' type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
            <input data-testid='SignUp-name' type="text" placeholder="User Name" required value={displayName} onChange={e => setDisplayName(e.target.value)} />
            <input data-testid='SignUp-password' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <input data-testid='SignUp-confirm' type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
            <section id="login-errors" className={statusMessage === 'Success' ? 'success' : ''} role="alert">{statusMessage}</section>
            <button data-testid='Sign Up' className="login-button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="login-form" id="login" onSubmit={handleSignIn}>
            <h1 className="login-title">Sign in</h1>
            <input type="email" data-testid='email' placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" data-testid='password' placeholder="Password" value={password} required onChange={e => setPassword(e.target.value)} />
            <section data-testid='errors' id="login-errors" className={(statusMessage === 'Success' || isLoading) ? 'success' : ''} role="alert">{statusMessage}</section>
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
    </div>
  )
}

export default Signup
