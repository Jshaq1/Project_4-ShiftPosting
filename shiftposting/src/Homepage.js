import './css/dash.css'

export default function Homepage(props) {

    return <div className="user-title">{props.displayName && <h1>{props.displayName.split('@')[0]}</h1>}</div>
}