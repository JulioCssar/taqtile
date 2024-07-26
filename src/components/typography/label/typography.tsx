import { Constants } from '..';
import { theme } from '../theme';

interface LabelProps {
  children: string;
  error?: string;
}

export function Label({ children, error }: LabelProps) {
  const LabelStyle = {
    fontFamily: Constants.fonts.fontSecundary,
    fontSize: Constants.size.medium,
    color: error ? theme.statesError : theme.brandPrimary,
    fontWeight: Constants.weight.regular,
  };
  return (
    <label htmlFor={children} style={LabelStyle}>
      {children}
    </label>
  );
}
