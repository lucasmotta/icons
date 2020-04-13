import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretDownIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const CaretDownIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: CaretDownIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.4318 6.4318C4.60754 6.25606 4.89246 6.25606 5.0682 6.4318L7.5 8.8636L9.9318 6.4318C10.1075 6.25606 10.3925 6.25606 10.5682 6.4318C10.7439 6.60753 10.7439 6.89246 10.5682 7.06819L7.8182 9.81819C7.73381 9.90259 7.61935 9.95 7.5 9.95C7.38065 9.95 7.26619 9.90259 7.1818 9.81819L4.4318 7.06819C4.25607 6.89246 4.25607 6.60753 4.4318 6.4318Z"
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
          d="M4.04289 6.04289C4.43342 5.65237 5.06658 5.65237 5.45711 6.04289L7.5 8.08579L9.54289 6.04289C9.93342 5.65237 10.5666 5.65237 10.9571 6.04289C11.3476 6.43342 11.3476 7.06658 10.9571 7.45711L8.20711 10.2071C8.01957 10.3946 7.76522 10.5 7.5 10.5C7.23478 10.5 6.98043 10.3946 6.79289 10.2071L4.04289 7.45711C3.65237 7.06658 3.65237 6.43342 4.04289 6.04289Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M4.43179 6.4318C4.60753 6.25606 4.89245 6.25606 5.06819 6.4318L7.49999 8.8636L9.93179 6.4318C10.1075 6.25606 10.3924 6.25606 10.5682 6.4318C10.7439 6.60753 10.7439 6.89246 10.5682 7.06819L7.81819 9.81819C7.73379 9.90259 7.61934 9.95 7.49999 9.95C7.38064 9.95 7.26618 9.90259 7.18179 9.81819L4.43179 7.06819C4.25605 6.89246 4.25605 6.60753 4.43179 6.4318Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CaretDownIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CaretDownIcon;
