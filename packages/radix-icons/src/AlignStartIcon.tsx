import * as React from 'react';
import { IconProps } from './types';

export const AlignStartIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.49956 1.05002C1.25103 1.05002 1.04956 1.25149 1.04956 1.50002C1.04956 1.74855 1.25103 1.95002 1.49956 1.95002L13.4996 1.95002C13.7481 1.95002 13.9496 1.74855 13.9496 1.50002C13.9496 1.25149 13.7481 1.05002 13.4996 1.05002H1.49956ZM6 11V3.99999H9V11H6ZM5 3.74999C5 3.33578 5.33579 2.99999 5.75 2.99999H9.25C9.66421 2.99999 10 3.33578 10 3.74999V11.25C10 11.6642 9.66421 12 9.25 12H5.75C5.33579 12 5 11.6642 5 11.25V3.74999Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default AlignStartIcon;
