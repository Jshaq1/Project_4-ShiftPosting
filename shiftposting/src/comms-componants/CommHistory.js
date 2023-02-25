import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function CommHistory(props) {

    const columns = [
        { field: 'id', headerName: 'ORDER', width: 100},
        {
            field: 'product',
            headerName: 'Product Name',
            width: 150,
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

    const rows = props.data

    return (
        <Box sx={{ height: 400, width: '100%', padding: '30px', borderRadius: '20px'}}>
            <DataGrid
                rows={props.data ? rows : []}
                columns={columns}
                // pageSize={}
                rowsPerPageOptions={[6]}
                // checkboxSelec
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    )

}