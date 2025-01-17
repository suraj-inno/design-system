import * as React from 'react';
import { Text } from '@/index';
import classNames from 'classnames';

const AvatarPopperBody = (props: any) => {
  const { hiddenAvatarList, popperRenderer, maxHeight, dark } = props;

  if (popperRenderer) {
    return popperRenderer(hiddenAvatarList);
  }

  return (
    <div className="px-4 py-3">
      <div className="AvatarGroup-TextWrapper" style={{ maxHeight }}>
        {hiddenAvatarList.map((item: any, ind: any) => {
          const { firstName = '', lastName = '', tooltipSuffix = '' } = item;
          const name = `${firstName} ${lastName} ${tooltipSuffix}`;
          const AvatarTextClass = classNames({
            [`mb-4`]: ind < hiddenAvatarList.length - 1,
          });
          return (
            <Text
              key={ind}
              appearance={dark ? 'white' : 'default'}
              className={AvatarTextClass}
              data-test="DesignSystem-AvatarGroup--Text"
            >
              {name}
            </Text>
          );
        })}
      </div>
    </div>
  );
};

export default AvatarPopperBody;
