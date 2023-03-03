import FormControl from '@mui/material/FormControl'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';




export default function CommsCalc(props) {

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onSubmit()
  }




  return (

    <form  className='calculator-form' onSubmit={handleSubmit}>
      
      <FormControl
      margin='dense' 
      >
       
      <div className='sale-details'>
      <h3>PRICING</h3>
         <TextField
          required
          id="TICKET"
          label="TICKET"
          data-testid="TICKET"
          type="number"
          value={props.ticket || ''} 
          onChange={props.onChange}
          size='small'
          margin='dense'
          
        />
        <TextField
          required
          id="STAFF"
          label="STAFF"
          data-testid="STAFF"
          type="number"
          value={props.staff || ''} 
          onChange={props.onChange}
          size='small'
          margin='dense'
          
        />
        <TextField
          required
          id="SOLD"
          label="SOLD AT"
          data-testid="SOLD AT"
          type="number"
          value={props.sold || ''} 
          onChange={props.onChange}
          size='small'
          margin='dense'
          
        />
        <TextField
          required
          id="POTENTIAL"
          label="POTENTIAL"
          data-testid="POTENTIAL"
          type="number"
          value={props.potential || ''} 
          onChange={props.onChange}
          size='small'
          margin='dense'
          placeholder='$'
          
          
        /> </div>
        </FormControl>
        <FormControl
      margin='dense' >
         <div className='sale-details'>
          <h3>ORDER</h3>
          <TextField
          required
          id="ORDER"
          label="ORDER#"
          data-testid="ORDER"
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
          data-testid="SKU"
          value={props.sku || ''} 
          onChange={props.onChange}
          size='small'
          margin='dense'
        />
        <TextField
          required
          id="PRODUCT"
          label="PRODUCT"
          data-testid="PRODUCT"
          value={props.product || ''} 
          onChange={props.onChange}
          size='small'
          margin='dense'
        />
        <Button variant='contained' 
        label='CALCULATE'
        data-testid='CALCULATE'
        type='submit' 
        size="small"
        sx={{
          width:' 100%',
          padding: '8px',
          marginTop: '8px',
          marginBottom: '6px'
        }}>Submit</Button>
        </div>
        </FormControl>
      <div className='result'>
        <h2>You can claim</h2>
       <h1 data-testid='OUTPUT'>{props.claimed !== undefined ? `$${Math.round(props.claimed)}` : ''}</h1>
      </div>
    </form>
    

  )
}