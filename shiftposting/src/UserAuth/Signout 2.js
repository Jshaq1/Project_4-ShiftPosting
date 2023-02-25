import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import Button from '@mui/material/Button';

export default function Signout() {
    

    const handleSignOut = (e) => {
        e.preventDefault()
        signOut(auth)
        .then(() => {
          console.log('sign out ')
        }).catch(error => console.log(error))
      }

return <Button onClick={handleSignOut}>Signout</Button>
}