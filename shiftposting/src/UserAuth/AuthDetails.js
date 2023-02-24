import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '../firebase'

export default function AuthDetails() {
    const [authUser, setAuthUser] = useState(null)


    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
    }, [])
    return authUser
    // return (
        // <div>
        //     <p>{authUser ? `Signed in as ${authUser.email}` : 'Signed Out'}</p>
        //     </div>
        //         )
}

