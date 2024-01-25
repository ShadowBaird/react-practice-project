import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'

test("renders the Button component", () => {
    render(<Button className="test">Test</Button>);
    const buttonElement = screen.getByText("Test");
    expect(buttonElement).toBeInTheDocument();
})