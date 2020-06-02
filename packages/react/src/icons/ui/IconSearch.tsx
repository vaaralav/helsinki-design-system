import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconSearch: React.FC<IconProps> = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M15 1a8 8 0 11-4.798 14.402l-6.401 6.4-1.591-1.59 6.398-6.4A8 8 0 0115 1zm0 2a6 6 0 100 12 6 6 0 000-12z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconSearch;
