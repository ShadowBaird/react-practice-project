import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Cart from './Cart'
import { useSelector, useDispatch,Provider, createStore } from 'react-redux';
import store from '../store/index'

describe('Cart', () => {

    test("renders the Cart component", () => {
        render(<Provider store={store}><Cart></Cart></Provider>);
        const element = screen.getByText("Email");
        expect(element).toBeInTheDocument();
    })
})
