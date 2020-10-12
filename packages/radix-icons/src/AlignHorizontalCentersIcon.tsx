import * as React from 'react';
import { IconProps } from './types';

export const AlignHorizontalCentersIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.24988 2C2.55952 2 1.99988 2.55964 1.99988 3.25V11.75C1.99988 12.4404 2.55952 13 3.24988 13H5.74988C6.44023 13 6.99988 12.4404 6.99988 11.75V3.25C6.99988 2.55964 6.44023 2 5.74988 2H3.24988ZM2.99988 3.25C2.99988 3.11193 3.11181 3 3.24988 3H5.74988C5.88795 3 5.99988 3.11193 5.99988 3.25V11.75C5.99988 11.8881 5.88795 12 5.74988 12H3.24988C3.11181 12 2.99988 11.8881 2.99988 11.75V3.25ZM9.25 4C8.55964 4 8 4.55964 8 5.25V9.75C8 10.4404 8.55964 11 9.25 11H11.75C12.4404 11 13 10.4404 13 9.75V5.25C13 4.55964 12.4404 4 11.75 4H9.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default AlignHorizontalCentersIcon;
