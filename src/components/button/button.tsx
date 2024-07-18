import { ButtonHTMLAttributes } from 'react';
import { colors } from '../typography/colors';
import { LinkButton } from '../typography/link-button/link-button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  expanded?: boolean;
}
export function Button({ children, expanded, ...rest }: ButtonProps) {
  const buttonStyle = {
    color: colors.brandSecondary,
    backgroundColor: colors.accessoryPurple,
    border: 'none',
    padding: '4px 24px',
    width: expanded ? '100%' : ' ',
    borderRadius: '20px',
    cursor: "pointer",
    
  };
  return <button {...rest} style={buttonStyle}><LinkButton>{children}</LinkButton></button>;
}

// componetizaçao dev junior
