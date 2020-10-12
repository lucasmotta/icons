import * as React from 'react';
import { IconProps } from './types';

export const BookmarkIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V13.5C12 13.6818 11.9014 13.8492 11.7424 13.9373C11.5834 14.0254 11.3891 14.0203 11.235 13.924L7.5 11.5896L3.765 13.924C3.61087 14.0203 3.41659 14.0254 3.25762 13.9373C3.09864 13.8492 3 13.6818 3 13.5V2.5ZM4 3V12.5979L6.97 10.7416C7.29427 10.539 7.70573 10.539 8.03 10.7416L11 12.5979V3H4Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default BookmarkIcon;
