import { useState, useEffect } from 'react'
import CommissionUI from './comms-componants/Commission'
import './css/dash.css'
import './css/Loader.css'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { onAuthStateChanged} from 'firebase/auth'
import { auth } from './firebase'
import Signup from './UserAuth/Signup';
import Loader from './UserAuth/Loader';
import Signout from './UserAuth/Signout'
import ChatUI from './chat/ChatUi';


export default function Dashboard(props) {
    const [navState, setnavState] = useState('')
    const [authUser, setAuthUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
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
                {loading === true ? <Loader></Loader> : '' }
                {authUser ? '' : <Signup></Signup>}
                <NavLink className='body' to={navState}>
                <Signout></Signout>
                    <Spline testId='home-scene' scene='https://prod.spline.design/qStMuDPEJmy-irik/scene.splinecode' onMouseDown={mouseClick} />
                </NavLink>
                <Routes>
                    <Route path='/calculator' element={<CommissionUI userCredentials={authUser} onClick={mouseClick}/>} />
                    <Route path='/chat' element={<ChatUI onClick={mouseClick} userCredentials={authUser} ></ChatUI>}/>
                </Routes>

        </BrowserRouter>
    )
}
