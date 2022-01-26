import React from 'react';
import { Button } from '@patternfly/react-core';
import { RebelIcon } from '@patternfly/react-icons';
import { EmptyStateCustom } from '../src/EmptyStateCustom';
import { EmptyStateFilter } from '../src/EmptyStateFilter';
import { EmptyStateNoData } from '../src/EmptyStateNoData';
import { EmptyStateUnauthorized } from '../src/EmptyStateUnauthorized';

export default {
  title: 'EmptyState',
};

export const Custom = (props) => <EmptyStateCustom {...props} />;
export const Filter = (props) => <EmptyStateFilter {...props} />;
export const NoData = (props) => <EmptyStateNoData {...props} />;
export const Unauthorized = (props) => <EmptyStateUnauthorized {...props} />;

Custom.args = {
  button: <Button>Foobar</Button>,
  description: 'Lorem ipsum dolor',
  title: 'Quux',
  icon: RebelIcon,
};

Filter.args = {
  button: undefined,
  clearAllFilters: () => console.log('cleared'),
  description: undefined,
  title: undefined,
};
Filter.argTypes = {
  button: { type: 'string' },
  description: { type: 'string' },
  title: { type: 'string' },
};

NoData.args = {
  button: <Button>Upload</Button>,
  description: 'Collections will appear once uploaded',
  title: 'No collections yet',
};

Unauthorized.args = {
  adminMessage: undefined,
  loginLink: <Button>Foo</Button>,
  title: undefined,
};
Unauthorized.argTypes = {
  adminMessage: { type: 'string' },
  title: { type: 'string' },
};
