import './css/commission.css'
import CommsCalc from './comms-componants/commcalc'
import { useState } from 'react'
import DisplayRecentCalc from './comms-componants/DisplayRecentCalc'

export default function CommissionUI() {
    const [currentCalc, setcurrentCalc] = useState({})
    const [ticket, setticket] = useState()
    const [staff, setstaff] = useState()
    const [sale, setsale] = useState()
    const [comms, setcomms] = useState()
    const [name, setname] = useState()
    const [sku, setsku] = useState()
    const [order, setorder] = useState()
    const [answer, setanswer] = useState()

    const handleSubmitCalc = (e) => {

        let x = (ticket - staff)
        let y = (sale - staff)
        let percent = (y / x)
        let calcAnswer = (comms * percent)
        setanswer(calcAnswer)

        let commissionObj = {
            'ticket': ticket,
            'staff': staff,
            'sale': sale,
            'comms': comms,
            'name': name,
            'sku': sku,
            'order': order,
            'answer': calcAnswer,
        }
        setcurrentCalc(commissionObj)
        console.log(answer)
        console.log(commissionObj)

    }

    const onInputChange = (e) => {
        const input = e.target.id
        if (input === 'SALE') {
            setsale(e.target.value)
        }
        if (input === 'STAFF') {
            setstaff(e.target.value)
        }
        if (input === 'TICKET') {
            setticket(e.target.value)
        }
        if (input === 'COMMS') {
            setcomms(e.target.value)
        }
        if (input === 'NAME') {
            setname(e.target.value)
        }
        if (input === 'SKU') {
            setsku(e.target.value)
        }
        if (input === 'ORDER') {
            setorder(e.target.value)
        }
    }


    return (
        <div className="main">
            <div>
                <CommsCalc
                    ticket={ticket}
                    staff={staff}
                    sale={sale}
                    comms={comms}
                    name={name}
                    sku={sku}
                    order={order}
                    onChange={onInputChange}
                    onSubmit={handleSubmitCalc} />
            </div>
            <DisplayRecentCalc
                details={[order, name, sku, sale, staff, ticket, comms, answer]}
            />

        </div>
    )
}