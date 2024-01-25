import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CartItem from './CartItem'


describe('CartItem', () => {
    test("renders the CartItem component", () => {
        const handle1 = jest.fn();
        const handle2 = jest.fn();
        const testData = {
            name: "Apple",
            quantity: 1,
            price:1
        }
        render(<CartItem name={testData.name}
             quantity={testData.quantity} 
             price={testData.price}
            handleAddItem={handle1}
            handleRemoveItem={handle2}
             ></CartItem>);
        const element = screen.getByText("+");
        expect(element).toBeInTheDocument();
    })
})
