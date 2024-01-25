import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from './Modal'
import React, { useRef } from "react";

jest.mock("react", () => {
  const originReact = jest.requireActual("react");
  const mUseRef = {current: {showModal: jest.fn()}}

  return {
    ...originReact,
    current: mUseRef,
  };
});


test("renders and shows the Modal component", () => {
    const div = document.createElement('div'); // create the div here
    div.setAttribute("id", "modal")
    document.body.appendChild(div)
    render(<Modal className="test" open={true}>
        <p>Modal Test</p>
        </Modal>);
    const buttonElement = screen.getByText("Modal Test");
    expect(buttonElement).toBeInTheDocument();
})