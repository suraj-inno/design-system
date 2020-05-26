import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button, { Size } from '../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const iconTransparent = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;

  const sizes: Size[] = ['regular'];

  const ButtonIcon = text(
    'icon',
    'refresh'
  );

  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '25%',
  };

  const outerStyle = {
    marginRight: '5%',
  };

  const innerStyle = {
    height: '40px',
  };

  return (
    <div style={style}>
      {
        sizes.map((IconSize, ind) => {
          return (
            <div key={ind} style={outerStyle}>
              <div style={innerStyle}>
                <Button
                  onClick={action('button-clicked')}
                  onMouseEnter={action('mouse-enter')}
                  onMouseLeave={action('mouse-leave')}
                  appearance={'Transparent'}
                  size={IconSize}
                  expanded={expanded}
                  disabled={disabled}
                  loading={loading}
                  icon={ButtonIcon}
                >
                  {''}
                </Button>
              </div>
              <br />
              <Text weight="strong">{IconSize.charAt(0).toUpperCase() + IconSize.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
