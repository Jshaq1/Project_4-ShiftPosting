import { useState } from 'react'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom'
import Spline from '@splinetool/react-spline'
import useAuthentication from './userAuth/UseAuthentication'
import Signup from './userAuth/Signup'
import Loader from './userAuth/Loader'
import Signout from './userAuth/Signout'
import ChatUI from './components/chat/ChatUi'
import CommissionUI from './components/comissionsUI/Commission'
import Homepage from './Homepage'
import Navbar from './components/nav/navbar'

const Dashboard = () => {
    const [navState, setNavState] = useState('')
    const { authUser, loading } = useAuthentication()

    const onNavClick = (e) => {
        const newNavState = e.target.name
        setNavState(`/${newNavState}`)
    }

    if (loading) {
        return <Loader />
    }

    if (!authUser) {
        return <Signup />
    }

    return (
        <BrowserRouter basename='/'>
            <Navbar />
            <NavLink className='body' to={navState}>
                <Spline
                    className='spline-scene'
                    scene='https://prod.spline.design/qStMuDPEJmy-irik/scene.splinecode'
                    onMouseDown={onNavClick}
                />
            </NavLink>
            <Routes>
                <Route
                    path='/calculator'
                    element={<CommissionUI userCredentials={authUser} onClick={onNavClick} />}
                />
                <Route
                    path='/chat'
                    element={<ChatUI onClick={onNavClick} />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Dashboard
