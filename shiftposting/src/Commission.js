import './css/commission.css'
import CommsCalc from './comms-componants/commcalc'
import CommHistory from './comms-componants/CommHistory'
import { useState, useEffect} from 'react'
import DisplayRecentCalc from './comms-componants/DisplayRecentCalc'
import {db} from './firebase'
import { doc, getDoc } from "firebase/firestore";
import { getFirestore, collection, query } from 'firebase/firestore';
import { useCollection, useCollectionData, useCollectionOnce} from 'react-firebase-hooks/firestore';



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
    const [tableData, setTableData] = useState()

    // const GetmoreData = () => {
    //     const commissionsRef = collection(db, 'comission')
    //     const [snapshot, loading, error] = useCollectionData(query(commissionsRef));
    //     console.log(snapshot)
    // }
    // GetmoreData()

    const commissionId = 'r3MZtDQeIFVLvr1Pjmm3'
    
    const getData = async () => {
        const docRef = doc(db, "commission", commissionId );
        const docSnap = await getDoc(docRef);   
        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            console.log("No such document!");
        }
    }

    useEffect(() => {
        getData()
        .then((response) => {
            
            setTableData(response)
        })
    },[currentCalc])
    
    
    

    const handleSubmitCalc = (e) => {
        let calcAnswer = ((ticket - staff) / (sale - staff) * comms)
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

        <CommHistory
         data={tableData}
         ></CommHistory>
           
        </div>
    )
}