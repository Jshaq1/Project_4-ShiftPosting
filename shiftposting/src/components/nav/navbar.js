import { Box } from '@mui/material'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

import useAuthentication from '../../userAuth/UseAuthentication'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useLocation, useNavigate } from 'react-router';

const menuItems = [
    { name: 'Calculator', path: '/calculator' },
    { name: 'Chat', path: '/chat' },
    { name: 'Coffee', path: '/coffee' },
    { name: 'Style', path: '/styleguide' },
]

const Navbar = () => {
    const location = useLocation().pathname
    const navigate = useNavigate()

    const handleSignout = () => {
        signOut(auth).catch(() => {
            alert('Failed to sign out. Please try again.')
        })
    }




    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '10vh',
            position: 'fixed',
            top: 0,
            padding: '1rem',
        }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '8vh',
                    borderRadius: '50px',
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.41)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    width: '50vw',
                    padding: '0 2rem',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: '#5a41fd93',
                    }}
                >
                    <h3>JB DASH</h3>
                    <Box
                        sx={{
                            padding: '0.5rem 1rem',
                        }}
                    >
                        |
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        {menuItems.map((item) => (
                            <Box
                                key={item.name}
                                sx={{
                                    cursor: 'pointer',
                                    color: '#5a41fd93',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    borderBottom: location === item.path ? '2px solid #ff5722' : 'none',
                                    '&:hover': {
                                        color: '#ff5722',
                                    },
                                }}
                                onClick={() => {
                                    navigate(item.path)
                                }}
                            >
                                {item.name}
                            </Box>
                        ))}
                    </Box>


                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    <ExitToAppIcon sx={{
                        cursor: 'pointer',
                        color: '#5a41fd93',
                        fontSize: '1.8rem',
                        '&:hover': {
                            color: '#ff5722',
                        },
                    }} onClick={() => {
                        handleSignout()
                    }} />
                </Box>
            </Box>

        </Box>
    )
}

export default Navbar