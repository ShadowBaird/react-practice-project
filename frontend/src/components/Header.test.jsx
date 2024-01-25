import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import store from '../store/index'


test("renders and shows the Header component", () => {
    render(<Router><Provider store={store}><Header></Header></Provider></Router>);
    const buttonElement = screen.getByText("Modal Test");
    expect(buttonElement).toBeInTheDocument();
})