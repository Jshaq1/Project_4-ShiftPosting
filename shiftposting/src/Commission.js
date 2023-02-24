import './css/commission.css'
import CommsCalc from './comms-componants/commcalc'
import CommHistory from './comms-componants/CommHistory'
import { useState, useEffect } from 'react'
import DisplayRecentCalc from './comms-componants/DisplayRecentCalc'
import { db } from './firebase'
import { collection, query, where, getDocs, setDoc, doc } from 'firebase/firestore';




export default function CommissionUI(props) {
    const [currentCalc, setcurrentCalc] = useState()
    const [ticket, setticket] = useState()
    const [staff, setstaff] = useState()
    const [sold, setsold] = useState()
    const [potential, setpotential] = useState()
    const [product, setproduct] = useState()
    const [sku, setsku] = useState()
    const [order, setorder] = useState()
    const [claimed, setclaimed] = useState()
    const [tableData, setTableData] = useState()



    const getData = async () => {
        const docRef = query(collection(db, "commission"));
        const docsSnap = await getDocs(docRef);
        const comissionData = []
        docsSnap.forEach(doc => {
            comissionData.push(doc.data());
        })
        if (comissionData.length > 0) {
            return comissionData
        }
        else {
            console.log("No such document!");
        }
    }

    const setData = async () => {
        await setDoc(doc(db, "commission", 'test'), currentCalc);
    }

    useEffect(() => {
        getData()
            .then((response) => {
                setTableData(response)
                console.log('get happened')
            })
    }, [currentCalc])

    
    useEffect(() => {
        if(currentCalc !== undefined){
            setData()
        }
    },[currentCalc])


    const handleSubmitCalc = (e) => {
        let calcClaimed = ((ticket - staff) / (sold - staff) * potential)
        setclaimed(calcClaimed)
        const commissionObj = {
            'ticket': ticket,
            'staff': staff,
            'sold': sold,
            'potential': potential,
            'product': product,
            'sku': sku,
            'order': order,
            'claimed': calcClaimed,
            'id': props.user,
        }
        setcurrentCalc(commissionObj)
        console.log(currentCalc)

    }

    const onInputChange = (e) => {
        e.preventDefault()
        const input = e.target.id
        if (input === 'SOLD') {
            setsold(e.target.value)
        }
        if (input === 'STAFF') {
            setstaff(e.target.value)
        }
        if (input === 'TICKET') {
            setticket(e.target.value)
        }
        if (input === 'POTENTIAL') {
            setpotential(e.target.value)
        }
        if (input === 'PRODUCT') {
            setproduct(e.target.value)
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
                    sold={sold}
                    potential={potential}
                    product={product}
                    sku={sku}
                    order={order}
                    onChange={onInputChange}
                    onSubmit={handleSubmitCalc} />
                <CommHistory
                    data={tableData}
                ></CommHistory>
            </div>
            <DisplayRecentCalc
                details={[order, product, sku, sold, staff, ticket, potential, claimed]}
            />



        </div>
    )
}