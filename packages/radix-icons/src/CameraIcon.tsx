import * as React from 'react';
import { IconProps } from './types';

export const CameraIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1 4C1 3.44772 1.44772 3 2 3H13C13.5523 3 14 3.44772 14 4V11C14 11.5523 13.5523 12 13 12H2C1.44772 12 1 11.5523 1 11V4ZM2 2C0.895431 2 0 2.89543 0 4V11C0 12.1046 0.895431 13 2 13H13C14.1046 13 15 12.1046 15 11V4C15 2.89543 14.1046 2 13 2H2ZM2.25 4C2.11193 4 2 4.11193 2 4.25V5.75454C2 5.89261 2.11193 6.00454 2.25 6.00454H4.75C4.88807 6.00454 5 5.89261 5 5.75454V4.25C5 4.11193 4.88807 4 4.75 4H2.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <circle cx="9.5" cy="7.584" r="3.101" stroke={color} />
    </svg>
  );
};

export default CameraIcon;
