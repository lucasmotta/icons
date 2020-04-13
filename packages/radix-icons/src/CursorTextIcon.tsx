import * as React from 'react';
import { BaseIconProps } from './types';

interface CursorTextIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const CursorTextIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: CursorTextIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.5 1C4.22386 1 4 1.22386 4 1.5C4 1.77614 4.22386 2 4.5 2C5.42215 2 6.0399 2.23054 6.42075 2.56379C6.79286 2.88939 7 3.36626 7 4V7H5.75C5.47386 7 5.25 7.22386 5.25 7.5C5.25 7.77614 5.47386 8 5.75 8H7V11C7 11.6337 6.79286 12.1106 6.42075 12.4362C6.0399 12.7695 5.42215 13 4.5 13C4.22386 13 4 13.2239 4 13.5C4 13.7761 4.22386 14 4.5 14C5.57785 14 6.4601 13.7305 7.07925 13.1888C7.24168 13.0467 7.38169 12.8896 7.5 12.7198C7.61832 12.8896 7.75832 13.0467 7.92075 13.1888C8.5399 13.7305 9.42215 14 10.5 14C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13C9.57785 13 8.9601 12.7695 8.57925 12.4362C8.20714 12.1106 8 11.6337 8 11V8H9.25C9.52614 8 9.75 7.77614 9.75 7.5C9.75 7.22386 9.52614 7 9.25 7H8V4C8 3.36626 8.20714 2.88939 8.57925 2.56379C8.9601 2.23054 9.57785 2 10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1C9.42215 1 8.5399 1.26946 7.92075 1.81121C7.75832 1.95333 7.61832 2.11043 7.5 2.28023C7.38168 2.11043 7.24168 1.95333 7.07925 1.81121C6.4601 1.26946 5.57785 1 4.5 1Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CursorTextIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CursorTextIcon;
