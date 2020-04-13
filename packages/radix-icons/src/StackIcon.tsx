import * as React from 'react';
import { BaseIconProps } from './types';

interface StackIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const StackIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: StackIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.75435 1.81954C7.59745 1.72682 7.40253 1.72682 7.24562 1.81954L1.74562 5.06954C1.59339 5.15949 1.49999 5.32317 1.49999 5.5C1.49999 5.67683 1.59339 5.84051 1.74562 5.93046L7.24562 9.18046C7.40253 9.27318 7.59745 9.27318 7.75435 9.18046L13.2544 5.93046C13.4066 5.84051 13.5 5.67683 13.5 5.5C13.5 5.32317 13.4066 5.15949 13.2544 5.06954L7.75435 1.81954ZM7.49999 8.16923L2.98283 5.5L7.49999 2.83077L12.0171 5.5L7.49999 8.16923ZM2.25435 8.31954C2.01661 8.17906 1.71001 8.2579 1.56952 8.49564C1.42904 8.73337 1.50788 9.03998 1.74562 9.18046L7.24562 12.4305C7.40253 12.5232 7.59745 12.5232 7.75435 12.4305L13.2544 9.18046C13.4921 9.03998 13.5709 8.73337 13.4305 8.49564C13.29 8.2579 12.9834 8.17906 12.7456 8.31954L7.49999 11.4192L2.25435 8.31954Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M1.99999 5.5L7.49999 8.75L13 5.5L7.49999 2.25L1.99999 5.5ZM2.25435 8.31954C2.01661 8.17906 1.71001 8.2579 1.56952 8.49564C1.42904 8.73337 1.50788 9.03998 1.74562 9.18046L7.24562 12.4305C7.40253 12.5232 7.59745 12.5232 7.75435 12.4305L13.2544 9.18046C13.4921 9.03998 13.5709 8.73337 13.4305 8.49564C13.29 8.2579 12.9834 8.17906 12.7456 8.31954L7.49999 11.4192L2.25435 8.31954Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.75435 1.81954C7.59745 1.72682 7.40253 1.72682 7.24562 1.81954L1.74562 5.06954C1.59339 5.15949 1.49999 5.32317 1.49999 5.5C1.49999 5.67683 1.59339 5.84051 1.74562 5.93046L7.24562 9.18046C7.40253 9.27318 7.59745 9.27318 7.75435 9.18046L13.2544 5.93046C13.4066 5.84051 13.5 5.67683 13.5 5.5C13.5 5.32317 13.4066 5.15949 13.2544 5.06954L7.75435 1.81954ZM7.49999 8.16923L2.98283 5.5L7.49999 2.83077L12.0171 5.5L7.49999 8.16923ZM2.25435 8.31954C2.01661 8.17906 1.71001 8.2579 1.56952 8.49564C1.42904 8.73337 1.50788 9.03998 1.74562 9.18046L7.24562 12.4305C7.40253 12.5232 7.59745 12.5232 7.75435 12.4305L13.2544 9.18046C13.4921 9.03998 13.5709 8.73337 13.4305 8.49564C13.29 8.2579 12.9834 8.17906 12.7456 8.31954L7.49999 11.4192L2.25435 8.31954Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`StackIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default StackIcon;
