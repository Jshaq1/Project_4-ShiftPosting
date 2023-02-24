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
          id="PRODUCT"
          label="PRODUCT"
          value={props.product || ''} 
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
          id="SOLD"
          label="SOLD AT"
          type="number"
          value={props.sold || ''} 
          onChange={props.onChange}
          size='small'
          margin='dense'
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          required
          id="POTENTIAL"
          label="POTENTIAL"
          type="number"
          value={props.potential || ''} 
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