import { auth, db} from '../firebase'


export default function ChatMessage(props) {
    const { text, uid } = props.message
    const currentUser = auth.currentUser.uid
    
   const style = currentUser === uid ? 'sent' : 'received'

    return (
        <div className={style}>
            <div className={`message-box ${style}`}>
            <p className="user-name">{props.userName ? props.userName : 'Its a Mystery!'}</p>
            <p className={`message ${style}`} >{text}</p>
            </div>
        </div>
        
    
    )
}