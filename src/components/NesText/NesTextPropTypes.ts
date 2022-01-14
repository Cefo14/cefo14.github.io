import { ReactChild } from 'react';

interface TextProps {
  children?: ReactChild | ReactChild[];
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'disabled' | 'normal';
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'div';
  className?: string;
}

export default TextProps;
