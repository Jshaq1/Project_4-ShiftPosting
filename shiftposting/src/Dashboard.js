import { useState } from 'react'
import Navigation from './Navigation'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import CommissionUI from './Commission'
import './css/dash.css'


export default function Dashboard() {
    const [navState, setnavState] = useState('Comission')
    const [userId, setUserId] = useState('jordan')

    return (
        <div className='body'>
            <Topbar />
            <div className='section1'>
                <Sidebar />
                <CommissionUI 
                user={userId}/>
            </div>

        </div>
    )
}