import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import Button from '@mui/material/Button'
import '../css/dash.css'

const Signout = () => {
  const handleSignOut = (e) => {
    e.preventDefault()
    signOut(auth).catch(() => {
      alert('Failed to sign out. Please try again.')
    })
  }

  return <div className='signout'><Button onClick={handleSignOut}>Signout</Button></div>
}

export default Signout
