import React from 'react';
import { render, screen } from '@testing-library/react';
import { Error404 } from './Error404';

describe('Error404', () => {
    it('should render successfully without button', () => {
        const title = 'Page not found';
        const body = 'This page was not found';
        const { asFragment } = render(<Error404 title={title} body={body} />);
        // matches the snapshot
        expect(asFragment()).toMatchSnapshot();
        // contains correct texts
        expect(screen.getByText(title)).toBeTruthy;
        expect(screen.getByText(body)).toBeTruthy;
    });
    //TODO add test for Error404 with a button
});
