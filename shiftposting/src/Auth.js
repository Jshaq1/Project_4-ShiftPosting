import React, { useEffect, useState, useContext} from 'react'
import { auth } from './firebase.js'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider() {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])


    const value = {
        currentUser,
        signup
    }

    return (
        <div>
            <AuthContext.Provider value={value}>
                
            </AuthContext.Provider>
        </div>
    )
}