import { Constants } from '..';
import { theme } from '../theme';

interface LabelProps {
  children: string;
}

const LabelStyle = {
  fontFamily: Constants.fonts.fontSecundary,
  fontSize: Constants.size.medium,
  color: theme.brandPrimary,
  fontWeight: Constants.weight.regular,
};
export function Label({ children }: LabelProps) {
  return <label style={LabelStyle}>{children}</label>;
}
