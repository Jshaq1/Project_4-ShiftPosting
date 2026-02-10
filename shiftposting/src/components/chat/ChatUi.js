import { db } from '../../firebase'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import ChatMessage from './ChatMessage';
import { useState, useEffect, useRef } from 'react'
import '../../css/Chat.css'
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SendMessage from './SendMessage';


const ChatUI = ({ onClick }) => {
    const [messages, setMessages] = useState([])
    const scroll = useRef()

    useEffect(() => {
        const dbQuery = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(dbQuery, (querySnapshot) => {
            let messages = []
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(messages)
        })
        return () => unsubscribe()
    }, [])



    return (
        <div className='main'>
            <div className='chatUi'>
                <div className='message-window'>
                    <NavLink to={'/'}><HomeIcon name='/' onClick={onClick} color="primary" sx={{ fontSize: 60 }} className='home-btn'></HomeIcon></NavLink>
                    <div>
                        {messages.map(msg => <ChatMessage key={msg.id} message={msg} timestamp={msg.createdAt} userName={msg.name}></ChatMessage>)}
                        <span ref={scroll}></span>
                    </div>

                </div>
                <SendMessage scroll={scroll}></SendMessage>
            </div>


        </div>
    )
}

export default ChatUI
