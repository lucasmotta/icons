import * as React from 'react';
import { BaseIconProps } from './types';

interface DiscIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const DiscIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: DiscIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.49988 1.12705C3.98026 1.12705 1.12704 3.98027 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98027 11.0195 1.12705 7.49988 1.12705ZM2.07704 7.49988C2.07704 4.50494 4.50493 2.07705 7.49988 2.07705C10.4948 2.07705 12.9227 4.50494 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM8.95152 7.50003C8.95152 8.30154 8.30177 8.95129 7.50026 8.95129C6.69876 8.95129 6.049 8.30154 6.049 7.50003C6.049 6.69852 6.69876 6.04877 7.50026 6.04877C8.30177 6.04877 8.95152 6.69852 8.95152 7.50003ZM9.90152 7.50003C9.90152 8.82621 8.82644 9.90129 7.50026 9.90129C6.17408 9.90129 5.099 8.82621 5.099 7.50003C5.099 6.17385 6.17408 5.09877 7.50026 5.09877C8.82644 5.09877 9.90152 6.17385 9.90152 7.50003Z"
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
          d="M13.3977 7.49988C13.3977 10.7571 10.7571 13.3977 7.49988 13.3977C4.2426 13.3977 1.60205 10.7571 1.60205 7.49988C1.60205 4.2426 4.2426 1.60205 7.49988 1.60205C10.7571 1.60205 13.3977 4.2426 13.3977 7.49988Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.49991 1.12705C3.98029 1.12705 1.12708 3.98027 1.12708 7.49988C1.12708 11.0195 3.98029 13.8727 7.49991 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98027 11.0195 1.12705 7.49991 1.12705ZM2.07708 7.49988C2.07708 4.50494 4.50496 2.07705 7.49991 2.07705C10.4948 2.07705 12.9227 4.50494 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49991 12.9227C4.50497 12.9227 2.07708 10.4948 2.07708 7.49988ZM8.95155 7.50003C8.95155 8.30154 8.3018 8.95129 7.50029 8.95129C6.69879 8.95129 6.04903 8.30154 6.04903 7.50003C6.04903 6.69852 6.69879 6.04877 7.50029 6.04877C8.3018 6.04877 8.95155 6.69852 8.95155 7.50003ZM9.90155 7.50003C9.90155 8.82621 8.82647 9.90129 7.50029 9.90129C6.17412 9.90129 5.09903 8.82621 5.09903 7.50003C5.09903 6.17385 6.17412 5.09877 7.50029 5.09877C8.82647 5.09877 9.90155 6.17385 9.90155 7.50003Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`DiscIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DiscIcon;
