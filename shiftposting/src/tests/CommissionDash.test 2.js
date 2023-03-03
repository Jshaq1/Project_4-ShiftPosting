import { render, screen, fireEvent } from '@testing-library/react';
import CommissionUI from '../comms-componants/Commission';
import { BrowserRouter } from 'react-router-dom';


  test('handleSubmitCalc sets currentCalc state and updates claimed state', async () => {
    // Mock userCredentials 
    const userCredentials = 'testUser';

    // Render CommissionUI component with mock props
    render(<BrowserRouter><CommissionUI userCredentials={userCredentials} /></BrowserRouter>);

    
    const ticketInput = screen.getByTestId('TICKET');
    fireEvent.change(ticketInput, { value: '10' } );
    const staffInput = screen.getByTestId('STAFF');
    fireEvent.change(staffInput, { value: '5' } );
    const soldInput = screen.getByTestId('SOLD AT');
    fireEvent.change(soldInput, { value: '10' } );
    const potentialInput = screen.getByTestId('POTENTIAL');
    fireEvent.change(potentialInput, { value: '100' } );
    const productInput = screen.getByTestId('PRODUCT');
    fireEvent.change(productInput, { value: 'Test product'  });
    const skuInput = screen.getByTestId('SKU');
    fireEvent.change(skuInput, { value: '12345' } );
    const orderInput = screen.getByTestId('ORDER');
    fireEvent.change(orderInput, { value: '123' } );
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);


    const currentCalc = screen.getByTestId('OUTPUT');
    expect(currentCalc).toBeInTheDocument();

    // Check that claimed state has been updated
    const claimed = screen.getByTestId('OUTPUT');
    expect(claimed).toHaveValue('50');
  });


