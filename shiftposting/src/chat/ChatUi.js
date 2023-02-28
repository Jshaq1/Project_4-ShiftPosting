import { db } from '../firebase'
import { collection, query, limit, orderBy, onSnapshot } from 'firebase/firestore';
import ChatMessage from './ChatMessage';
import { useState, useEffect, useRef } from 'react'
import '../css/Chat.css'

import SendMessage from './SendMessage';


export default function ChatUI(props) {
    const [messages, setMessages] = useState([])
    const scroll = useRef()

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'), limit(25))
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
                <div>
                    {messages && messages.map(msg => <ChatMessage  key={msg.id} message={msg} timestamp={msg.createdAt} userName={msg.name}></ChatMessage>)}
                </div>
            <SendMessage scroll={scroll}></SendMessage>
            <span ref={scroll}></span>

            </div>


        </div>
    )
}
