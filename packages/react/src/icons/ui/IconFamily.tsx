import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconFamily = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    {...rest}
    role="img"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
      <path d="m20 22v-6h2v8h-4v-2z" />
      <path d="m18 4c.5523 0 1-.44772 1-1s-.4477-1-1-1-1 .44772-1 1 .4477 1 1 1zm0 2c1.6569 0 3-1.34315 3-3s-1.3431-3-3-3-3 1.34315-3 3 1.3431 3 3 3z" />
      <path d="m2 16h2v6h2v2h-4z" />
      <path d="m6 4c.55228 0 1-.44772 1-1s-.44772-1-1-1-1 .44772-1 1 .44772 1 1 1zm0 2c1.65685 0 3-1.34315 3-3s-1.34315-3-3-3-3 1.34315-3 3 1.34315 3 3 3z" />
      <path d="m11 18c-.5523 0-1 .4477-1 1v2h-2v-2c0-1.6569 1.34315-3 3-3h2c1.6569 0 3 1.3431 3 3v2h-2v-2c0-.5523-.4477-1-1-1zm3 3v3h-4v-3z" />
      <path d="m12 13.5c.2761 0 .5-.2239.5-.5s-.2239-.5-.5-.5-.5.2239-.5.5.2239.5.5.5zm0 2c1.3807 0 2.5-1.1193 2.5-2.5s-1.1193-2.5-2.5-2.5-2.5 1.1193-2.5 2.5 1.1193 2.5 2.5 2.5z" />
      <path d="m3 9c-.55228 0-1 .44772-1 1v6h-2v-6c0-1.65685 1.34315-3 3-3h7c1.1046 0 2 .89543 2 2zm9 0c0-1.10457.8954-2 2-2h7c1.6569 0 3 1.34315 3 3v6h-2v-6c0-.55228-.4477-1-1-1z" />
    </g>
  </svg>
);
