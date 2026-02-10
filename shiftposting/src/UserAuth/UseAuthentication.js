import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

const useAuthentication = () => {
    const [authUser, setAuthUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user.email)
            } else {
                setAuthUser(null)
            }
            setLoading(false)
        })
        return () => {
            listen()
        }
    }, [])

    return { authUser, loading }
}

export default useAuthentication
