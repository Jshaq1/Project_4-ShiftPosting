import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';

export default function CommsCalc(props) {

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onSubmit()
  }



  return <div className='commsCalc' >
<Card sx={{ minWidth: 275 }}>
    <form  className='calculator-form' onSubmit={handleSubmit}>
      <FormControl >
        <div className='sale-details'>
          <h3> Sale Details</h3>
          <TextField
          required
          id="ORDER"
          label="ORDER#"
          value={props.order || ''} 
          onChange={props.onChange}
          size='small'
          margin='dense'
        />
          <TextField
          required
          id="SKU"
          label="SKU"
          type="number"
          value={props.sku || ''} 
          onChange={props.onChange}
          size='small'
          margin='dense'
        />
        <TextField
          required
          id="NAME"
          label="ITEM NAME"
          value={props.name || ''} 
          onChange={props.onChange}
          size='small'
          margin='dense'
        />
        </div>
      <div className='pricing-details'>
      <h3>Pricing Details</h3>
         <TextField
          required
          id="TICKET"
          label="TICKET"
          type="number"
          value={props.ticket || ''} 
          onChange={props.onChange}
          size='small'
          margin='dense'
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          required
          id="STAFF"
          label="STAFF"
          type="number"
          value={props.staff || ''} 
          onChange={props.onChange}
          size='small'
          margin='dense'
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          required
          id="SALE"
          label="SALE PRICE"
          type="number"
          value={props.sale || ''} 
          onChange={props.onChange}
          size='small'
          margin='dense'
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          required
          id="COMMS"
          label="COMISSION"
          type="number"
          value={props.comms || ''} 
          onChange={props.onChange}
          size='small'
          margin='dense'
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        /></div>
        

        <Button type='submit' size="small">Submit</Button>
      </FormControl>
    </form>
    </Card>

  </div>
}