import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import Button from '@mui/material/Button';
import '../css/dash.css'

export default function Signout() {
    

    const handleSignOut = (e) => {
        e.preventDefault()
        signOut(auth)
        .then(() => {
        }).catch(error => console.log(error))
      }

return <div className='signout'><Button  onClick={handleSignOut}>Signout</Button></div> 
}