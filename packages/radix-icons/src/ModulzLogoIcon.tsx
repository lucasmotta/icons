import * as React from 'react';
import { IconProps } from './types';

export const ModulzLogoIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.05 9.76666L3.80556 11.8333 1.05 13.9V9.76666zM1.05 3.98889L3.80556 6.05555 1.05 8.12222V3.98889zM4.42036 1.1L7.17592 3.16667 4.42036 5.23333V1.1zM7.79072 3.98889L10.5463 6.05555 7.79072 8.12222V3.98889zM11.1611 1.1L13.9166 3.16667 11.1611 5.23333V1.1zM11.1611 6.87777L13.9166 8.94444 11.1611 11.0111V6.87777zM3.83889 6.87777V11.0111L1.08333 8.94444 3.83889 6.87777zM7.20925 3.98889V8.12222L4.45369 6.05555 7.20925 3.98889zM3.83889 1.1V5.23333L1.08333 3.16667 3.83889 1.1zM10.5796 1.1V5.23333L7.82406 3.16667 10.5796 1.1zM13.95 3.98889V8.12222L11.1944 6.05555 13.95 3.98889zM13.95 9.76666V13.9L11.1944 11.8333 13.95 9.76666z"
        fill={color}
        stroke={color}
        strokeWidth=".1"
      />
    </svg>
  );
};

export default ModulzLogoIcon;
