import React, { ComponentClass, ReactElement, ReactNode } from 'react';
import {
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStatePrimary,
  EmptyStateVariant,
  Title,
} from '@patternfly/react-core';

interface IProps {
  button?: ReactElement;
  description: ReactNode;
  icon?: ComponentClass;
  title: string;
}

export class EmptyStateCustom extends React.Component<IProps> {
  render() {
    const { button, description, icon, title } = this.props;

    return (
      <EmptyState variant={EmptyStateVariant.small}>
        <EmptyStateIcon icon={icon} />
        <Title headingLevel='h4' size='lg'>
          {title}
        </Title>
        <EmptyStateBody>{description}</EmptyStateBody>
        {button && <EmptyStatePrimary>{button}</EmptyStatePrimary>}
      </EmptyState>
    );
  }
}
