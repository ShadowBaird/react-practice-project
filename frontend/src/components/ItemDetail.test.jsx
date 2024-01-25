import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ItemDetail from './ItemDetail'
import { Provider } from 'react-redux'
import store from '../store/index'


test("renders and shows the Item Detail component", () => {
    const test = {name: "test", price: 1, description:"description"}
    render(<Provider store={store}><ItemDetail item={test}></ItemDetail></Provider>);
    const buttonElement = screen.getByText("test");
    expect(buttonElement).toBeInTheDocument();
})