import { render, fireEvent } from "@testing-library/react";
import CommsCalc from "../comms-componants/commcalc";


test("should call onSubmit prop when form is submitted", () => {
    const mockSubmitHandler = jest.fn();
    const { getByTestId } = render(
      <CommsCalc onSubmit={mockSubmitHandler} />
    );

    const calculateButton = getByTestId("CALCULATE");
    fireEvent.click(calculateButton);

    expect(mockSubmitHandler).toHaveBeenCalledTimes(1);
  });

  test("should submit form data empty when button is clicked", () => {
    const mockSubmitHandler = jest.fn();
    const { getByTestId } = render(
      <CommsCalc onSubmit={mockSubmitHandler} />
    );

    const ticketInput = getByTestId("TICKET");
    const staffInput = getByTestId("STAFF");
    const soldInput = getByTestId("SOLD AT");
    const potentialInput = getByTestId("POTENTIAL");
    const orderInput = getByTestId("ORDER");
    const skuInput = getByTestId("SKU");
    const productInput = getByTestId("PRODUCT");
    const calculateButton = getByTestId("CALCULATE");

    fireEvent.change(ticketInput, { value: "10" });
    fireEvent.change(staffInput, { value: "5" } );
    fireEvent.change(soldInput, { value: "100" } );
    fireEvent.change(potentialInput, { value: "500" } );
    fireEvent.change(orderInput, { value: "123" } );
    fireEvent.change(skuInput, { value: "456" } );
    fireEvent.change(productInput, { value: "Test Product" } );
    fireEvent.click(calculateButton);

    expect(mockSubmitHandler).toHaveBeenCalledTimes(1);
    expect(mockSubmitHandler).toHaveBeenCalledWith();
  });




