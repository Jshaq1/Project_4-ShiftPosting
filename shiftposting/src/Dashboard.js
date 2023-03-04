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
import Homepage from './Homepage';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'


function Dashboard(props) {
    const [navState, setnavState] = useState('')
    const [authUser, setAuthUser] = useState(null)
    const [displayName, setDisplayName] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user.email)
                setDisplayName(user.displayName)
            } else {
                setAuthUser(null)
            }
            
            return () => {
                listen()
            }})
    }, [])

 
   
    const mouseClick = (e) => {
        setnavState('./' + e.target.name)   
    }

    const handleSignIn = (auth, email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleSignUp = (auth, email, password, displayName) => {
        return createUserWithEmailAndPassword(auth, email, password)
        .then(response => {
          updateProfile(auth.currentUser, {
            displayName: displayName
          })
          
        })}
     
    return (
        <BrowserRouter basename='Project_4-ShiftPosting'>
                {loading === true ? <Loader></Loader> : '' }
                {loading === false && authUser === null ? <Signup triggerSignup={handleSignUp} triggerSignIn={handleSignIn}></Signup> : ''  }
                <Signout></Signout>
                <Homepage displayName={displayName}></Homepage>
                
                <NavLink className='body' to={navState}>
                    <Spline className='spline-scene' scene='https://prod.spline.design/qStMuDPEJmy-irik/scene.splinecode' onMouseDown={mouseClick} />
                    
                </NavLink>
                <Routes>
                    <Route path='/calculator' element={<CommissionUI userCredentials={authUser} onClick={mouseClick}/>} />
                    <Route path='/chat' element={<ChatUI onClick={mouseClick} userCredentials={authUser} ></ChatUI>}/>
                </Routes>

        </BrowserRouter>
    )
}

export default Dashboard