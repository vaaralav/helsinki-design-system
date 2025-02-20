import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconScrollContent = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M18 9H12V11H18V9Z" fill="currentColor" />
      <path d="M12 12H18V14H12V12Z" fill="currentColor" />
      <path d="M18 15H12V17H18V15Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 21C3.79086 21 2 19.2091 2 17V5C2 2.79086 3.79086 1 6 1C8.20914 1 10 2.79086 10 5H22V21H6ZM10 7H20V19H6C4.89543 19 4 18.1046 4 17C4 15.8954 4.89543 15 6 15C6.55228 15 7.05228 15.2239 7.41421 15.5858L10 13V7ZM8 5C8 3.89543 7.10457 3 6 3C4.89543 3 4 3.89543 4 5V13.5351C4.58835 13.1948 5.27143 13 6 13C6.72857 13 7.41165 13.1948 8 13.5351V5Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
