// import React, { useEffect, useState } from 'react'
// import { onAuthStateChanged } from 'firebase/auth'

// import { auth } from '../firebase'

// export default function AuthDetails () {
//     const [authUser, setAuthUser] = useState(null)
//     console.log(authUser)

//     useEffect(() => {
//         const listen = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setAuthUser(user.email)
//             } else {
//                 setAuthUser(null)
//             }
//             return () => {
//                 listen()
//             }
//         })
//     }, [])
//     return authUser
//     // return (
//         // <div>
//         //     <p>{authUser ? `Signed in as ${authUser.email}` : 'Signed Out'}</p>
//         //     </div>
//         //         )
// }

