import { useState } from 'react'
import Navigation from './Navigation'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import CommissionUI from './comms-componants/Commission'
import './css/dash.css'
import AuthDetails from './UserAuth/AuthDetails'
import Signout from './UserAuth/Signout'


export default function Dashboard(props) {
    const [navState, setnavState] = useState('Comission')


    return (
        <div className='body'>
            {/* <Topbar userCredentials={props.userCredentials}/> */}
            <Signout></Signout>
            <div className='section1'>
                {/* <Sidebar /> */}
                <CommissionUI 
                userCredentials={props.userCredentials}/>
            </div>
       

        </div>
    )
}