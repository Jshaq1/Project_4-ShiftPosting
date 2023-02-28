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
        <Button variant='contained' type='submit' size="small"
        sx={{
          width:' 100%',
          padding: '8px',
          marginTop: '8px'
        }}>Submit</Button>
        </div>
        </FormControl>
      <div className='result'>
        <h2>You can claim</h2>
       <h1>${Math.round(props.claimed)}</h1>
      </div>
    </form>
    

  )
}