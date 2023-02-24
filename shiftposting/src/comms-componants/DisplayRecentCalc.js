import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';


export default function DisplayRecentCalc(props){
    
    return(
        <div>
    <Card sx={{ minWidth: 400, maxHeight: 400 }}>
      <CardContent>
        <h3>Order#</h3>
        <p>{props.details[0]}</p>
        <h3>Item Name</h3>
        <p>{props.details[1]}</p>
        <h3>SKU</h3>
        <p>{props.details[2]}</p>
        <h3>Sale</h3>
        <p>{props.details[3]}</p>
        <h3>Staff</h3>
        <p>{props.details[4]}</p>
        <h3>Ticket</h3>
        <p>{props.details[5]}</p>
        <h3>Potential Comms</h3>
        <p>{props.details[6]}</p>
      </CardContent>
    
    </Card>
        </div>
    )
}
