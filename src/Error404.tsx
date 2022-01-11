import React, { FunctionComponent } from 'react';
import {
  Title,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  TitleSizes,
} from '@patternfly/react-core';
import PathMissingIcon from '@patternfly/react-icons/dist/js/icons/pathMissing-icon';

interface Props {
  title: string;
  body: string;
  buttonText?: string;
  link?: string;
}

export const Error404: FunctionComponent<Props> = ({
  title,
  body,
  buttonText,
  link,
}) => (
  <EmptyState variant={EmptyStateVariant.xl}>
    <Title
      headingLevel='h4'
      size={TitleSizes['4xl']}
      style={{ padding: '2em' }}
    >
      {title}
    </Title>
    <EmptyStateIcon icon={PathMissingIcon} />
    <EmptyStateBody>{body}</EmptyStateBody>
    {link && buttonText && <a href={link}>{buttonText}</a>}
  </EmptyState>
);
