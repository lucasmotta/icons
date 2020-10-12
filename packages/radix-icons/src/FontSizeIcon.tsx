import * as React from 'react';
import { IconProps } from './types';

export const FontSizeIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2.78235 2.21708C2.70734 2.14206 2.6056 2.09992 2.49951 2.09992C2.39342 2.09992 2.29168 2.14206 2.21667 2.21708L0.216668 4.21708C0.0604584 4.37329 0.0604584 4.62655 0.216668 4.78276C0.372878 4.93897 0.626144 4.93897 0.782354 4.78276L2.09951 3.4656L2.09951 11.5342L0.782353 10.2171C0.626144 10.0609 0.372878 10.0609 0.216668 10.2171C0.0604582 10.3733 0.0604582 10.6266 0.216668 10.7828L2.21667 12.7828C2.29168 12.8578 2.39342 12.8999 2.49951 12.8999C2.6056 12.8999 2.70734 12.8578 2.78235 12.7828L4.78235 10.7828C4.93856 10.6266 4.93856 10.3733 4.78235 10.2171C4.62614 10.0609 4.37288 10.0609 4.21667 10.2171L2.89951 11.5342L2.89951 3.4656L4.21667 4.78276C4.37288 4.93897 4.62614 4.93897 4.78235 4.78276C4.93856 4.62655 4.93856 4.37329 4.78235 4.21708L2.78235 2.21708ZM10.5 2.74997C10.7107 2.74997 10.8989 2.88211 10.9704 3.08036L13.9704 11.3999C14.064 11.6597 13.9294 11.9462 13.6696 12.0399C13.4098 12.1336 13.1233 11.9989 13.0296 11.7392L12.0477 9.016H8.9523L7.97035 11.7392C7.87668 11.9989 7.59016 12.1336 7.33039 12.0399C7.07062 11.9462 6.93597 11.6597 7.02964 11.3999L10.0296 3.08036C10.1011 2.88211 10.2892 2.74997 10.5 2.74997ZM10.5 4.72396L11.7412 8.166H9.25881L10.5 4.72396Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default FontSizeIcon;
