import * as React from 'react';
import { BaseIconProps } from './types';

interface LapTimerIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const LapTimerIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: LapTimerIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`LapTimerIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LapTimerIcon;
