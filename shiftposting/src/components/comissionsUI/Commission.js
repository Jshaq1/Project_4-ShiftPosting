import '../../css/commission.css'
import CommsCalc from './Commcalc'
import CommHistory from './CommHistory'
import { useState, useEffect } from 'react'
import { db } from '../../firebase'
import { collection, query, where, getDocs, setDoc, doc, deleteDoc } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';





const CommissionUI = ({ userCredentials, onClick }) => {
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
        try {
            const docRef = query(collection(db, 'commission'), where('user', '==', userCredentials));
            const docsSnap = await getDocs(docRef);
            const comissionData = docsSnap.docs.map((doc) => doc.data());
            return comissionData;
        } catch (error) {
            console.log('Error fetching data:', error);
            return [];
        }
    };

    const setData = async (input) => {
        await setDoc(doc(db, "commission", order), currentCalc);
    }

    useEffect(() => {
        getData()
            .then((response) => {
                setTableData(response)
            })
    }, [currentCalc])


    useEffect(() => {
        if (currentCalc) {
            setData()
                .then(res => {
                    setticket()
                    setstaff()
                    setsold()
                    setpotential()
                    setproduct()
                    setsku()
                    setorder()

                })
        }

    }, [currentCalc])


    const handleSubmitCalc = async (e) => {
        let calcClaimed = (((sold - staff) / (ticket - staff)) * potential)
        setclaimed(calcClaimed)
        const commissionObj = {
            'ticket': ticket,
            'staff': staff,
            'sold': sold,
            'potential': potential,
            'product': product,
            'sku': sku,
            'id': order,
            'claimed': calcClaimed,
            'user': userCredentials,
        }
        setcurrentCalc(commissionObj)
    }

    const onInputChange = (e) => {
        e.preventDefault();
        const input = e.target.id;
        const stateUpdaterMap = {
            SOLD: setsold,
            STAFF: setstaff,
            TICKET: setticket,
            POTENTIAL: setpotential,
            PRODUCT: setproduct,
            SKU: setsku,
            ORDER: setorder,
        };

        const setState = stateUpdaterMap[input];
        if (setState) {
            setState(e.target.value);
        }
    };

    const deleteCalc = async (e) => {
        if (window.confirm('Are you sure you wish to delete?')) {
            await deleteDoc(doc(db, 'commission', e.row.id))
                .then(res => {
                    setcurrentCalc(0)
                })
        } else {
            return
        }


    }
    return (
        <div className="main">

            <div className='commsCalc' >
                <NavLink to={'/'}><HomeIcon name='/' onClick={onClick} color="primary" sx={{ fontSize: 60 }} className='home-btn'></HomeIcon></NavLink>
                <CommsCalc
                    ticket={ticket}
                    staff={staff}
                    sold={sold}
                    potential={potential}
                    product={product}
                    sku={sku}
                    order={order}
                    claimed={claimed}
                    onChange={onInputChange}
                    onSubmit={handleSubmitCalc} />
                <div>
                    <CommHistory data={tableData} onClick={deleteCalc} />
                </div>

            </div>
        </div>
    )
}

export default CommissionUI;