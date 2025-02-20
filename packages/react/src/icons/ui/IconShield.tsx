import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconShield = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M17 9.25L15.75 8L10.75 13L8.25 10.5L7 11.75L10.75 15.5L17 9.25Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 6C21 22 12 22 12 22C12 22 3 22 3 6L12 2L21 6ZM8.82872 18.5052C7.23291 17.0867 5.24721 14.0133 5.02123 7.29031L12 4.18864L18.9787 7.29031C18.7528 14.0133 16.7671 17.0867 15.1712 18.5052C14.2998 19.2798 13.4477 19.6518 12.838 19.8324C12.5317 19.9232 12.2871 19.9653 12.1347 19.9847C12.0736 19.9924 12.028 19.9964 12 19.9985C11.9719 19.9964 11.9263 19.9924 11.8652 19.9847C11.7129 19.9653 11.4682 19.9232 11.1619 19.8324C10.5523 19.6518 9.70017 19.2798 8.82872 18.5052Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
