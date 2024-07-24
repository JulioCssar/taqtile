import { ReactNode } from 'react';
import { theme } from '../theme';
import { Constants } from '..';

interface LinkButtonProps {
  children: ReactNode;
}

const LinkButtonStyle = {
  fontWeight: Constants.weight.regular,
  fontSize: Constants.size.medium,
  color: theme.brandPrimary,
  fontFamily: Constants.fonts.fontSecundary,
};

export function LinkButton({ children }: LinkButtonProps) {
  return <p style={LinkButtonStyle}>{children}</p>;
}