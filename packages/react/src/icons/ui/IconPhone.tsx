import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconPhone: React.FC<IconProps> = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
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
        fill="currentColor"
        d="M4.885 2.506L3.043 4.348l-.034.035C.572 7.07 2.784 12.452 7.191 16.818c4.445 4.404 9.751 6.6 12.426 4.173l1.877-1.876c.678-.678.655-1.563.058-2.272l-.058-.063-4.144-4.144c-.678-.678-1.564-.656-2.273-.058l-.063.058-1.046 1.046-.037-.008c-.585-.144-1.241-.602-2.123-1.484l-.123-.124c-.8-.819-1.222-1.44-1.359-1.997l-.008-.038 1.046-1.045.058-.063c.598-.71.62-1.595-.058-2.273L7.22 2.506l-.063-.058c-.709-.597-1.594-.62-2.272.058zm1.167 1.66l3.652 3.652-1.428 1.428v.414c0 1.355.687 2.513 2.118 3.945 1.432 1.431 2.591 2.12 3.946 2.12h.414l1.428-1.428 3.651 3.65-1.595 1.596c-1.525 1.382-5.878-.42-9.64-4.146l-.152-.152c-3.57-3.607-5.315-7.847-4.012-9.452l.047-.056 1.571-1.57z"
      />
    </g>
  </svg>
);

export default IconPhone;
