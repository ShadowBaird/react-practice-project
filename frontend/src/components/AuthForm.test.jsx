import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AuthForm from './AuthForm'


describe('AuthForm', () => {
    test("renders the AuthForm component", () => {
        render(<AuthForm></AuthForm>);
        const element = screen.getByText("Email");
        expect(element).toBeInTheDocument();
    })
})
