import { db } from '../firebase'
import { collection, query, limit, orderBy, onSnapshot } from 'firebase/firestore';
import ChatMessage from './ChatMessage';
import { useState, useEffect, useRef } from 'react'
import '../css/Chat.css'
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

import SendMessage from './SendMessage';


export default function ChatUI(props) {
    const [messages, setMessages] = useState([])
    const scroll = useRef()

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = []
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(messages)
        })
        return () => unsubscribe();
    }, [])



    return (
        <div className='main'>
            <div className='chatUi'>
                <div className='message-window'>
                    <NavLink to={'/'}><HomeIcon name='/' onClick={props.onClick} color="primary" sx={{ fontSize: 60 }} className='home-btn'></HomeIcon></NavLink>
                    <div>

                        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} timestamp={msg.createdAt} userName={msg.name}></ChatMessage>)}
                        <span ref={scroll}></span>
                    </div>
                    
                    </div>
                    <SendMessage scroll={scroll}></SendMessage>
                    
                
            </div>
            

        </div>
    )
}
