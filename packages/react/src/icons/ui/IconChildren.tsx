import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconChildren = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    {...rest}
    role="img"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="m0 0h24v24h-24z" />
      <g fill="currentColor">
        <path d="m5 24v-3h2v3z" />
        <path d="m7 24v-3h2v3z" />
        <path d="m6 18c-.55228 0-1 .4477-1 1v2h-2v-2c0-1.6569 1.34315-3 3-3h2c1.65685 0 3 1.3431 3 3v2h-2v-2c0-.5523-.44772-1-1-1z" />
        <path d="m7 10.5c1.38071 0 2.5 1.1193 2.5 2.5s-1.11929 2.5-2.5 2.5-2.5-1.1193-2.5-2.5 1.11929-2.5 2.5-2.5zm0 2c-.27614 0-.5.2239-.5.5s.22386.5.5.5.5-.2239.5-.5-.22386-.5-.5-.5z" />
        <path d="m15 24v-3h2v3z" />
        <path d="m17 24v-3h2v3z" />
        <path d="m16 18c-.5523 0-1 .4477-1 1v2h-2v-2c0-1.6569 1.3431-3 3-3h2c1.6569 0 3 1.3431 3 3v2h-2v-2c0-.5523-.4477-1-1-1z" />
        <path d="m17 13.5c.2761 0 .5-.2239.5-.5s-.2239-.5-.5-.5-.5.2239-.5.5.2239.5.5.5zm0 2c1.3807 0 2.5-1.1193 2.5-2.5s-1.1193-2.5-2.5-2.5-2.5 1.1193-2.5 2.5 1.1193 2.5 2.5 2.5z" />
        <path
          d="m13.2195 14.4549c-.4205.4205-.5823 1.0018-.4853 1.546.5442.097 1.1255-.0648 1.546-.4853s.5822-1.0018.4853-1.546c-.5442-.0969-1.1255.0648-1.546.4853z"
          fillRule="nonzero"
        />
        <path
          d="m20.7764 14.4549c.4205.4205.5823 1.0018.4853 1.546-.5442.0969-1.1254-.0648-1.5459-.4853s-.5823-1.0018-.4853-1.546c.5441-.097 1.1254.0648 1.5459.4853z"
          fillRule="nonzero"
        />
      </g>
    </g>
  </svg>
);
