import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconSwapUser = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
      <path d="m6 5c.55228 0 1-.44772 1-1s-.44772-1-1-1-1 .44772-1 1 .44772 1 1 1zm0 2c1.65685 0 3-1.34315 3-3s-1.34315-3-3-3-3 1.34315-3 3 1.34315 3 3 3z" />
      <path d="m18 14c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1zm0 2c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3z" />
      <path d="m4 10c-.55228 0-1 .4477-1 1v1h6v-1c0-.5523-.44772-1-1-1zm-3 1c0-1.65685 1.34315-3 3-3h4c1.65685 0 3 1.34315 3 3v3h-10z" />
      <path d="m16 19c-.5523 0-1 .4477-1 1v1h6v-1c0-.5523-.4477-1-1-1zm-3 1c0-1.6569 1.3431-3 3-3h4c1.6569 0 3 1.3431 3 3v3h-10z" />
      <path d="m16 3h-3.0002v-2h3.0002c1.6569 0 3 1.34315 3 3v1.08578l1.2929-1.29289 1.4142 1.41422-3.7071 3.7071-3.7071-3.7071 1.4142-1.41422 1.2929 1.2929v-1.08579c0-.55228-.4477-1-1-1z" />
      <path d="m6 15.0858 3.70711 3.7071-1.41422 1.4142-1.2929-1.2929v1.0858c0 .5523.44772 1 1 1h3.00001v2h-3.00001c-1.65686 0-3-1.3431-3-3v-1.0858l-1.29288 1.2929-1.41422-1.4142z" />
    </g>
  </svg>
);
