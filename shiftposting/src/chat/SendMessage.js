import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { auth, db} from '../firebase'
import { serverTimestamp, addDoc, collection } from 'firebase/firestore';


export default function SendMessage({scroll}) {
    const [input, setInput] = useState('')

    const send = async (e) => {
        e.preventDefault()
        if(input === ''){
            alert('Please enter value message')
            return
        }
        const uid = auth.currentUser.uid
        const displayName = auth.currentUser.displayName
        await addDoc(collection(db, "messages", ), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        });
        setInput('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }


    return (
        <div >
            <form className='message-send' onSubmit={send}>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={1}
                    placeholder="Say Hi!"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    sx={{
                        width:'400px',
                        
                       
                      }}
                />
                <Button variant="contained" endIcon={<SendIcon />} type='submit'
                 sx={{
                    width:'150px',
                    padding: '8px',
                    height:'55px'
                  }}>
                    Send
                </Button>
            </form>


        </div>
    )

}