import React from 'react';
import { Error500 } from '../src/Error500';

export default {
  title: 'Error500',
};

Error500.argTypes = {
  message: { type: 'string' },
};

export const Error500 = () => (<Error500
  message={'Something went wrong'}
/>);
