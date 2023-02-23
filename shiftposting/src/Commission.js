import './css/commission.css'
import CommsCalc from './comms-componants/commcalc'
import { useState } from 'react'

export default function CommissionUI() {
    const [currentCalc, setcurrentCalc] = useState()

    const handleSubmitCalc = (calcAnswer) => {
        setcurrentCalc(calcAnswer)
        console.log(calcAnswer)
    }

    return (
        <div className="main">
            <div>
                <CommsCalc
                onSubmit={handleSubmitCalc}/>
            </div>

        </div>
    )
}