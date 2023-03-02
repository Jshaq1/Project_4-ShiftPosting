import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import Button from '@mui/material/Button';

export default function Signout() {
    

    const handleSignOut = (e) => {
        e.preventDefault()
        signOut(auth)
        .then(() => {
        }).catch(error => console.log(error))
      }

return <Button className='signout' onClick={handleSignOut}>Signout</Button>
}