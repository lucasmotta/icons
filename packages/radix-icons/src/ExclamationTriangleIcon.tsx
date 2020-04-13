import * as React from 'react';
import { BaseIconProps } from './types';

interface ExclamationTriangleIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const ExclamationTriangleIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ExclamationTriangleIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8.50756 1.70743C8.05118 0.946809 6.94882 0.946806 6.49245 1.70743L0.184626 12.2205C-0.285274 13.0036 0.278859 14 1.19218 14H13.8078C14.7211 14 15.2853 13.0036 14.8154 12.2205L8.50756 1.70743ZM7.34994 2.22193C7.41791 2.10864 7.58209 2.10864 7.65006 2.22193L13.9579 12.735C14.0279 12.8516 13.9439 13 13.8078 13H1.19218C1.05615 13 0.972134 12.8516 1.04212 12.735L7.34994 2.22193ZM6.82691 5.4995C6.81222 5.11761 7.11783 4.80002 7.5 4.80002C7.88217 4.80002 8.18779 5.11761 8.1731 5.4995L8.01922 9.5004C8.00849 9.77939 7.7792 10 7.5 10C7.22081 10 6.99152 9.77939 6.98079 9.5004L6.82691 5.4995ZM8.24989 11.4894C8.24989 11.9036 7.9141 12.2394 7.49989 12.2394C7.08568 12.2394 6.74989 11.9036 6.74989 11.4894C6.74989 11.0752 7.08568 10.7394 7.49989 10.7394C7.9141 10.7394 8.24989 11.0752 8.24989 11.4894Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ExclamationTriangleIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ExclamationTriangleIcon;
