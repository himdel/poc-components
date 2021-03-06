import React from 'react';
import { Error404 } from '../src/Error404';

export default {
  title: 'Error404',
  component: Error404,
};

export const WithoutButton = (props) => <Error404 {...props} />;

WithoutButton.args = {
  title: "Hello",
  body: "World",
  buttonText: undefined,
  link: undefined,
};
WithoutButton.argTypes = {
  buttonText: { type: 'string' },
  link: { type: 'string' },
};

export const WithButton = () => (<Error404
  title={"Hello"}
  body={"World"}
  buttonText="Button"
  link="/"
/>);
