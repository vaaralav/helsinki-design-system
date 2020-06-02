import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconTicket: React.FC<IconProps> = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
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
        d="M14.5 2l3.125 3.125L17 5.75a.884.884 0 001.173 1.319L18.25 7l.625-.625L22 9.5 9.5 22l-3.125-3.125L7 18.25a.884.884 0 00-1.173-1.319L5.75 17l-.625.625L2 14.5 14.5 2zm0 2.5l-3 3a1 1 0 11-.991 1.127L10.5 8.5l-6 6 .731.731.169-.073.173-.06a2.656 2.656 0 012.26.312l.166.118.138.115.113.107.138.149c.613.714.785 1.676.515 2.53l-.065.18-.07.16.732.731 6.002-6a1 1 0 11.99-1.126l.008.128 3-3.002-.732-.732-.168.074-.173.06a2.656 2.656 0 01-2.26-.312L16 8.472l-.138-.115-.113-.107-.138-.149a2.652 2.652 0 01-.515-2.53l.065-.18.07-.16L14.5 4.5zm-1.707 5.293a1 1 0 111.414 1.414 1 1 0 01-1.414-1.414z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconTicket;
