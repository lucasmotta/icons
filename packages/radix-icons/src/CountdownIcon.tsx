import * as React from 'react';
import { BaseIconProps } from './types';

interface CountdownIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const CountdownIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: CountdownIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M12.9 7.49997C12.9 4.78957 10.7877 2.09998 7.50001 2.09998C5.27015 2.09998 4.02317 3.30293 2.64208 5H4.5C4.77614 5 5 5.22385 5 5.5C5 5.77614 4.77614 6 4.5 6H1.5C1.22386 6 1 5.77614 1 5.5V2.5C1 2.22385 1.22386 2 1.5 2C1.77614 2 2 2.22385 2 2.5V4.20527C3.37298 2.53835 4.87335 1.09998 7.50001 1.09998C11.4103 1.09998 13.9 4.31037 13.9 7.49997C13.9 10.6896 11.4103 13.9 7.50001 13.9C5.62953 13.9 4.07175 13.1598 2.96263 12.0312C2.36885 11.4271 1.90516 10.7133 1.58902 9.94517C1.48393 9.68981 1.60574 9.3976 1.86111 9.2925C2.11647 9.18741 2.40868 9.30923 2.51377 9.56459C2.78222 10.2169 3.17528 10.821 3.67584 11.3303C4.60449 12.2752 5.90831 12.9 7.50001 12.9C10.7877 12.9 12.9 10.2104 12.9 7.49997ZM7 10V5.00003H8V10H7Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CountdownIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CountdownIcon;
