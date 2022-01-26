import React, { ReactElement, ReactNode } from 'react';
import { CubesIcon, PlusCircleIcon } from '@patternfly/react-icons';
import { EmptyStateCustom } from './EmptyStateCustom';

interface IProps {
  button?: ReactElement;
  title: string;
  description: ReactNode;
}

export class EmptyStateNoData extends React.Component<IProps> {
  render() {
    const { button, description, title } = this.props;

    return (
      <EmptyStateCustom
        icon={button ? PlusCircleIcon : CubesIcon}
        title={title}
        description={description}
        button={button}
      />
    );
  }
}
