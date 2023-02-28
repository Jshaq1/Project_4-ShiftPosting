import { useState, useEffect } from 'react'
import CommissionUI from './comms-componants/Commission'
import './css/dash.css'
import { Routes, Route, Link, BrowserRouter, NavLink } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { onAuthStateChanged} from 'firebase/auth'
import { auth } from './firebase'
import Signup from './UserAuth/Signup';


import Signout from './UserAuth/Signout'
import ChatUI from './chat/ChatUi';


export default function Dashboard(props) {
    const [navState, setnavState] = useState('')
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user.email)
            } else {
                setAuthUser(null)
            }
            return () => {
                listen()
            }})
    }, [])

 
   
    const mouseClick = (e) => {
        setnavState(e.target.name)   
    }

    return (
        <BrowserRouter>
            
                {authUser ? '' : <Signup></Signup>}
                <NavLink className='body' to={navState === 'calculator' ? '/commissionDash' : '/'}>
                    <Signout></Signout>
                    <Spline scene='https://prod.spline.design/qStMuDPEJmy-irik/scene.splinecode' onMouseDown={mouseClick} />
                </NavLink>
                <Routes>
                    <Route path='/commissionDash' element={<CommissionUI userCredentials={authUser} onClick={mouseClick}/>} />
                    <Route path='/chat' element={<ChatUI userCredentials={authUser} ></ChatUI>}/>
                </Routes>

        </BrowserRouter>
    )
}
