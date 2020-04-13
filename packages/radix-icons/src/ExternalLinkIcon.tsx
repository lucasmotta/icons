import * as React from 'react';
import { BaseIconProps } from './types';

interface ExternalLinkIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const ExternalLinkIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ExternalLinkIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V9.07143H12V12H3V3L5.92857 3V2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V6C13 6.27614 12.7761 6.5 12.5 6.5C12.2239 6.5 12 6.27614 12 6V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9C8.72386 3 8.5 2.77614 8.5 2.5C8.5 2.22386 8.72386 2 9 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
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
          d="M13.2092 1.79502C13.304 1.8904 13.3757 2.00014 13.4241 2.11722C13.4727 2.23425 13.4996 2.3625 13.5 2.497L13.5 2.5V2.50069V5.5C13.5 6.05229 13.0523 6.5 12.5 6.5C11.9477 6.5 11.5 6.05229 11.5 5.5V4.91421L10.5 5.91421V12C10.5 12.2761 10.2761 12.5 10 12.5H3C2.72386 12.5 2.5 12.2761 2.5 12V5C2.5 4.72386 2.72386 4.5 3 4.5H9.08579L10.0858 3.5H9.5C8.94772 3.5 8.5 3.05228 8.5 2.5C8.5 1.94772 8.94772 1.5 9.5 1.5H12.4998H12.5C12.7751 1.5 13.0242 1.61106 13.205 1.79078L13.2092 1.79502Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V9.07143H12V12H3V3L5.92857 3V2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V6C13 6.27614 12.7761 6.5 12.5 6.5C12.2239 6.5 12 6.27614 12 6V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9C8.72386 3 8.5 2.77614 8.5 2.5C8.5 2.22386 8.72386 2 9 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ExternalLinkIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ExternalLinkIcon;
