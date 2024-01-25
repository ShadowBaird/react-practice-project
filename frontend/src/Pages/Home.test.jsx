import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home'
import { Provider } from 'react-redux'
import store from '../store/index'


test("renders and shows Home page", () => {
    render(<Provider store={store}><Home></Home></Provider>);
    const element = screen.getByText("Welcome to the shop");
    expect(element).toBeInTheDocument();
})