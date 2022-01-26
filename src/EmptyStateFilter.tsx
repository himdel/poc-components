import React from 'react';
import { Button } from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';
import { EmptyStateCustom } from './EmptyStateCustom';

interface IProps {
  button?: string;
  clearAllFilters?: () => void;
  description?: string;
  title?: string;
}

export class EmptyStateFilter extends React.Component<IProps> {
  static defaultProps = {
    button: 'Clear all filters',
    description:
      'No results match the filter criteria. Try changing your filter settings.',
    title: 'No results found',
  };

  render() {
    const { clearAllFilters, button, description, title } = this.props;

    return (
      <EmptyStateCustom
        title={title}
        description={description}
        icon={SearchIcon}
        button={
          clearAllFilters ? (
            <Button onClick={clearAllFilters} variant='link'>
              {button}
            </Button>
          ) : null
        }
      />
    );
  }
}
