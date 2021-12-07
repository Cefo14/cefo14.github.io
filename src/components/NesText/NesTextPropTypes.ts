import { ReactChild } from 'react';

interface TextProps {
  children: ReactChild,
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'disabled' | 'text'
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'div'
}

export default TextProps;
