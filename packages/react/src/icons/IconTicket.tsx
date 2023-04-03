import React from 'react';
import styles from '../../templates/Icon.module.css';

interface IconProps {
  ariaLabel?: string;
  ariaLabelledby?: string;
  ariaHidden?: boolean;
  className?: string;
  color?: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  style?: React.CSSProperties;
}

export const IconTicket = ({
  ariaLabel = 'ticket',
  ariaLabelledby,
  ariaHidden = true,
  className = '',
  color,
  size = 's',
  style = {},
}: React.SVGProps<SVGSVGElement> & IconProps) => (
  <svg
    className={[styles.icon, styles[size], className].filter((e) => e).join(' ')}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledby}
    aria-hidden={ariaHidden}
    color={color}
    style={style}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 2L17.625 5.125L17 5.75C16.6548 6.09518 16.6548 6.65482 17 7C17.3205 7.32052 17.826 7.34342 18.1729 7.06868L18.25 7L18.875 6.375L22 9.5L9.5 22L6.375 18.875L7 18.25C7.34518 17.9048 7.34518 17.3452 7 17C6.67948 16.6795 6.17403 16.6566 5.82709 16.9313L5.75 17L5.125 17.625L2 14.5L14.5 2ZM14.5 4.5L11.4995 7.5C11.7556 7.49987 12.0117 7.59751 12.2071 7.79289C12.5976 8.18342 12.5976 8.81658 12.2071 9.20711C11.8166 9.59763 11.1834 9.59763 10.7929 9.20711C10.6301 9.04428 10.5351 8.83928 10.5081 8.62727L10.5 8.4995L4.5 14.5L5.23125 15.2312L5.40002 15.1584L5.57251 15.0971C6.3226 14.8597 7.15743 14.9639 7.83317 15.4096L7.99865 15.5282L8.13665 15.643L8.25 15.75L8.38817 15.899C9.0014 16.6127 9.17289 17.5753 8.90266 18.4282L8.838 18.6091L8.76812 18.7681L9.5 19.5L15.5025 13.5C15.2457 13.5006 14.9888 13.403 14.7929 13.2071C14.4024 12.8166 14.4024 12.1834 14.7929 11.7929C15.1834 11.4024 15.8166 11.4024 16.2071 11.7929C16.3704 11.9561 16.4654 12.1618 16.4921 12.3744L16.5 12.5025L19.5 9.5L18.7681 8.76812L18.6 8.84162L18.4275 8.90288C17.6774 9.14031 16.8426 9.03614 16.1668 8.59035L16.0014 8.47179L15.8634 8.35699L15.75 8.25L15.6118 8.101C14.9986 7.38729 14.8271 6.42473 15.0973 5.57183L15.162 5.39087L15.2312 5.23125L14.5 4.5ZM12.7929 9.79289C13.1834 9.40237 13.8166 9.40237 14.2071 9.79289C14.5976 10.1834 14.5976 10.8166 14.2071 11.2071C13.8166 11.5976 13.1834 11.5976 12.7929 11.2071C12.4024 10.8166 12.4024 10.1834 12.7929 9.79289Z"
      fill="currentColor"
    ></path>
  </svg>
);
