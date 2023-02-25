export default function Topbar(props){
    const userEmail = props.userCredentials
    return(
        <div className="top-nav">
            <div className="logo"><h1>{userEmail}</h1></div>
            
            
        </div>
    )
}