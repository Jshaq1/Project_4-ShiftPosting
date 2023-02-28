

export default function ChatMessage(props) {
    const { text, userId } = props.message

    return (
        <div>
            <p>{props.userName}</p>
            <p>{text}</p>
        </div>

    )
}