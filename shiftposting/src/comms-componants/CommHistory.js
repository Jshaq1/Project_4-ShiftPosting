import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function CommHistory(props) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 40 },
        {
            field: 'product',
            headerName: 'Product Name',
            width: 120,
            editable: true,
        },
        {
            field: 'order',
            headerName: 'Order Num',
            width: 120,
            editable: true,
        },
        {
            field: 'sku',
            headerName: 'SKU',
            type: 'number',
            width: 90,
            editable: true,
        },
        {
            field: 'ticket',
            headerName: 'Ticket',
            type: 'number',
            width: 90,
            editable: true,
        },
        {
            field: 'staff',
            headerName: 'Staff',
            type: 'number',
            width: 90,
            editable: true,
        }, 
        {
            field: 'sold',
            headerName: 'Sold At',
            type: 'number',
            width: 90,
            editable: true,
        },
        {
            field: 'potential',
            headerName: 'Comm/Spiv',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'claimed',
            headerName: 'Claimable',
            type: 'number',
            width: 110,
            editable: true,
        },
    ];
    const sampleData = [{id: 1, product: 'dingus', sku: 578321, ticket: 200, staff: 52 }]
    const rows = props.data
    return (
        <Box sx={{ height: 400, width: '200%' }}>
            <DataGrid
                rows={props.data ? rows : sampleData}
                columns={columns}
                // pageSize={}
                rowsPerPageOptions={[6]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    )

}