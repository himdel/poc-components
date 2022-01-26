import React from 'react';
import { LockIcon } from '@patternfly/react-icons';
import { EmptyStateCustom } from './EmptyStateCustom';

interface IProps {
  adminMessage?: string;
  loginLink: React.ReactNode;
  title?: string;
}

export class EmptyStateUnauthorized extends React.Component<IProps> {
  static defaultProps = {
    adminMessage:
      'Contact your organization administrator for more information.',
    title: 'You do not have access to Automation Hub',
  };

  render() {
    const { adminMessage, loginLink, title } = this.props;

    return (
      <EmptyStateCustom
        icon={LockIcon}
        title={title}
        description={
          <>
            {adminMessage}
            <br />
            <br />
            {loginLink}
          </>
        }
      />
    );
  }
}
