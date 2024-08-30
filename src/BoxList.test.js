import React from "react";
import { render, fireEvent } from '@testing-library/react';
import BoxList from "./BoxList";

// BoxList smoke test
it('renders without crashing', () => {
    render(<BoxList />)
})

// BoxList snapshot test
it('matches snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot()
})

// tests that the remove button works
it('removes the box when the x is clicked', () => {
    const { getByLabelText, getByText, queryByText } = render(<BoxList />);

    // add a box 
    fireEvent.change(getByLabelText("Color"), {target: { value: "blue" } });
    fireEvent.change(getByLabelText("Width"), { target: { value: "100"} });
    fireEvent.change(getByLabelText("Height"), { target: { value: "100"} });
    fireEvent.click(getByText("Add Box"));

    // ensure the box is added 
    expect(queryByText("X")).toBeInTheDocument();

    // click the remove button
    fireEvent.click(getByText("X"));

    // ensure the box is removed 
    expect(queryByText("X")).not.toBeInTheDocument();
})

