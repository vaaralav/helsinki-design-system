import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconMover = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    {...rest}
    role="img"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="currentColor">
      <path
        clipRule="evenodd"
        d="m5 4c.27614 0 .5-.22386.5-.5s-.22386-.5-.5-.5-.5.22386-.5.5.22386.5.5.5zm0 2c1.38071 0 2.5-1.11929 2.5-2.5s-1.11929-2.5-2.5-2.5-2.5 1.11929-2.5 2.5 1.11929 2.5 2.5 2.5z"
        fillRule="evenodd"
      />
      <path d="m7 9c.55228 0 1 .44772 1 1v6h2v-6c0-1.65685-1.34315-3-3-3h-4c-1.65685 0-3 1.34315-3 3v6h2v-6c0-.55228.44772-1 1-1z" />
      <path clipRule="evenodd" d="m2 16h2v6h2v-6h2v8h-6z" fillRule="evenodd" />
      <path
        clipRule="evenodd"
        d="m23.9932 24c-6.6243-.0037-11.9932-5.3749-11.9932-12 0-6.62742 5.3726-11.99999809 12-12v24c-.0023 0-.0046 0-.0068 0zm-1.4932-11v8.5c-4.7244-.4691-7.9816-3.7756-8.4506-8.5zm0-2h-8.4506c.469-4.72441 3.7262-8.12608 8.4506-8.59515z"
        fillRule="evenodd"
      />
      <path d="m14.6838 4.43584c2.829 1.3243 5.9862 2.06416 9.3162 2.06416v2c-3.7483 0-7.2959-.85928-10.4565-2.39159.3333-.59038.7152-1.14972 1.1403-1.67257z" />
      <path d="m24 15.5c-3.7483 0-7.2959.8593-10.4565 2.3916.3333.5904.7152 1.1497 1.1403 1.6726 2.829-1.3243 5.9862-2.0642 9.3162-2.0642z" />
      <path d="m24 2.40485c-3.0346 2.26036-5 5.87607-5 9.95085 0 4.0747 1.9654 7.6904 5 9.9508v1.6492h-1.1339c-3.5579-2.6219-5.8661-6.8414-5.8661-11.6 0-5.24707 2.8064-9.83866 7-12.3557z" />
    </g>
  </svg>
);
