import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconPersonGenderless = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
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
      <path d="m0 0h24v12 12h-24z" />
      <path
        d="m11 17v5h2v-5h2v7h-6v-7zm5.5-8 .5 8h-2l-.2833-6.5048c-.2472-.97762-.7094-1.4576-1.5472-1.49307l-2.1976-.00213c-.9028 0-1.39246.47848-1.64955 1.4952l-.32235 6.5048h-2l.5-8c.45127-1.78457 1.48859-1.94086 3.329-1.99781l.1429-.00219h2.0953c1.9236 0 2.97.16967 3.4328 2zm-4.4805-9c1.6569 0 3 1.34315 3 3 0 1.59767679-1.2488774 2.90366059-2.8237227 2.99490729l-.1957773.00509271c-1.6568 0-2.99995-1.34315-2.99995-3 0-1.59767679 1.2489239-2.90366059 2.8236828-2.99490729zm-.0103274 2.00004119.0103274-.00004119c-.5523 0-1 .44772-1 1 0 .54890833.4422503.99452944.9898964.99995002.5429036.00004998.9906036-.44767002.9906036-.99995002 0-.54921933-.4427516-.99503437-.9908274-.99995881z"
        fill="currentColor"
      />
    </g>
  </svg>
);
