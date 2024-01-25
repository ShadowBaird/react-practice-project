import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import OrderDetail from './OrderDetail'
import { Provider } from 'react-redux'
import store from '../store/index'


test("renders and shows the Order Detail component", () => {
    const test = {orderId: 1, total:1, detail:[{product: "manzana", quantity:1}]}
    render(<Provider store={store}><OrderDetail orderId={test.orderId} total={test.total} detail={test.detail}></OrderDetail></Provider>);
    const element = screen.getByText("Total: $1");
    expect(element).toBeInTheDocument();
})