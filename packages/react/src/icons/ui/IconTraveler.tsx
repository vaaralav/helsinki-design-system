import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconTraveler = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    {...rest}
    viewBox="0 0 24 24"
    role="img"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="currentColor">
      <path
        clipRule="evenodd"
        d="m3.3999 14v-.5c0-1.6569 1.34315-3 3-3h1.2c1.65685 0 3 1.3431 3 3v.5h3.4001v10h-14v-10zm2-.5c0-.5523.44772-1 1-1h1.2c.55229 0 1 .4477 1 1v.5h-3.2zm-3.3999 2.5h10v6h-10z"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="m18 4c.5523 0 1-.44772 1-1s-.4477-1-1-1-1 .44772-1 1 .4477 1 1 1zm0 2c1.6569 0 3-1.34315 3-3s-1.3431-3-3-3-3 1.34315-3 3 1.3431 3 3 3z"
        fillRule="evenodd"
      />
      <path d="m21 9c.5523 0 1 .44772 1 1v6h2v-6c0-1.65685-1.3431-3-3-3h-6c-1.6569 0-3 1.34315-3 3v2h2v-2c0-.55228.4477-1 1-1z" />
      <path clipRule="evenodd" d="m20 22v-6h2v8h-4v-2z" fillRule="evenodd" />
    </g>
  </svg>
);
