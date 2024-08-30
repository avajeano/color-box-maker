import React from "react";
import { render } from '@testing-library/react';
import Box from "./Box";

// Box smoke test
it('renders without crashing', () => {
    render(<Box id="test-id" backgroundColor="red" width={100} height={100} removeBox={() => {}} />)
})

// Box snapshot test
it('matches snapshot', () => {
    const { asFragment } = render(<Box id="test-id" backgroundColor="red" width={100} height={100} removeBox={() => {}} />);
    expect(asFragment()).toMatchSnapshot()
})