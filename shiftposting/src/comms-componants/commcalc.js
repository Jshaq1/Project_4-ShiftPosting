import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import { useState } from 'react';

export default function CommsCalc(props) {
  const [ticket, setticket] = useState()
  const [staff, setstaff] = useState()
  const [sale, setsale] = useState()
  const [comms, setcomms] = useState()
  const [name, setname] = useState()
  const [sku, setsku] = useState()
  const [order, setorder] = useState()
  const [answer, setanswer] = useState()
  

  const handleSubmit = (event) => {
    event.preventDefault()
    let x = (ticket - staff)
    let y = (sale - staff)
    let percent = (y / x)
    let calcAnswer = (comms * percent)
    setanswer(calcAnswer)

    let comissionObj = {
      'ticket': ticket,
      'staff': staff,
      'sale': sale,
      'comms': comms,
      'name': name,
      'sku': sku,
      'order': order,
      'answer': answer,
    }

    props.onSubmit(comissionObj)
  }



  return <div className='commsCalc' >

    <form  className='calculator-form' onSubmit={handleSubmit}>
      <FormControl >
        <div className='sale-details'>
          <h3> Sale Details</h3>
          <TextField
          required
          id="outlined-required"
          label="SKU"
          value={sku} onChange={(e) => setsku(e.target.value)}
          size='small'
          margin='dense'
        />
        <TextField
          required
          id="outlined-required"
          label="ITEM NAME"
          value={name} onChange={(e) => setname(e.target.value)}
          size='small'
          margin='dense'
        />
        <TextField
          required
          id="outlined-required"
          label="ORDER#"
          value={order} onChange={(e) => setorder(e.target.value)}
          size='small'
          margin='dense'
        /></div>
      <div className='pricing-details'>
      <h3>Pricing Details</h3>
         <TextField
          required
          id="outlined-required"
          label="TICKET"
          value={ticket} onChange={(e) => setticket(e.target.value)}
          size='small'
          margin='dense'
        />
        <TextField
          required
          id="outlined-required"
          label="STAFF"
          value={staff} onChange={(e) => setstaff(e.target.value)}
          size='small'
          margin='dense'
        />
        <TextField
          required
          id="outlined-required"
          label="SALE PRICE"
          value={sale} onChange={(e) => setsale(e.target.value)}
          size='small'
          margin='dense'
        />
        <TextField
          required
          id="outlined-required"
          label="COMISSION"
          value={comms} onChange={(e) => setcomms(e.target.value)}
          size='small'
          margin='dense'
        /></div>
        

        <input type={'submit'}></input>
      </FormControl>
    </form>

  </div>
}