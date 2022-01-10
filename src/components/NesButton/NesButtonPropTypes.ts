import { ButtonHTMLAttributes, ReactChild } from 'react';

interface NesButtonPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'disabled',
  children?: ReactChild | ReactChild[]
}

export default NesButtonPropTypes;
