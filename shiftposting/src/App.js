
import './css/App.css';
import Dashboard from './Dashboard'
import Signup from './UserAuth/Signup';
import AuthDetails from './UserAuth/AuthDetails';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, BrowserRouter, NavLink } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

function App() {
  // const [authUser, setAuthUser] = useState(null)
  // console.log(authUser)

  //   useEffect(() => {
  //       const listen = onAuthStateChanged(auth, (user) => {
  //           if (user) {
  //               setAuthUser(user.email)
  //           } else {
  //               setAuthUser(null)
  //           }
  //           return () => {
  //               listen()
  //           }
  //       })
  //   }, [])
  
  
  return (
    
      <div className="App">
        {/* {authUser ? <Dashboard userCredentials={authUser}></Dashboard>:<Signup></Signup>} */}
        <Dashboard></Dashboard>
      </div>


  );
}

export default App;
