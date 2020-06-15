import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';
import { OptionType } from '../../DropdownList';

const labelMapping: { [key: string]: string } = {
  ['DEFAULT']: 'Default',
  ['WITH_ICON']: 'Icon',
  ['WITH_META']: 'SubInfo',
  ['ICON_WITH_META']: 'Icon with SubInfo'
};

// CSF format story
export const optionType = () => {
  const optionTypes = ['DEFAULT', 'WITH_ICON', 'WITH_META', 'ICON_WITH_META'];

  return (
    <div style={{ display: 'flex', minHeight: '240px' }}>
      {
        optionTypes.map((type, ind) => {
          return (
            <div
              key={ind}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '5%' }}
            >
              <Text weight="strong">{labelMapping[type]}</Text><br />
              <Dropdown options={storyOptions.slice(0, 3)} optionType={type as OptionType} />
            </div>
          );
        })
      }
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '128px' }}>
        <Text weight="strong">{'Checkboxes'}</Text><br />
        <Dropdown options={storyOptions.slice(0, 3)} checkboxes={true} />
      </div>

    </div>
  );
};

export default {
  title: 'Atoms|Dropdown/Variants',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown'
      }
    }
  }
};
