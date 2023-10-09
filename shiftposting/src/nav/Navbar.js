

export default function Navbar(props){

    // const onClick = (e) => {
    //     props.onClick(e, e.target.getAttribute('name'))
    // }
    return(
        <nav className="navbar" onClick={props.onClick}>
                <h2 className="logo">{props.displayName}</h2>
                <ul className="nav-links">
                    <li name='calculator'>CALCULATOR</li>
                    <li name='style'>STYLE</li>
                    <li name='chat'>CHAT</li>
                    <li name='coffee'>COFFEE</li>
                </ul>
                <div>SIGNOUT</div>

        </nav>
    )
}

