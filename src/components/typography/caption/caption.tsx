import { Constants } from '..';
import { theme } from '../theme';

interface CaptionProps {
  children: string;
}

const captionStyle = {
  fontFamily: Constants.fonts.fontSecundary,
  fontSize: Constants.size.medium,
  color: theme.statesError,
  fontWeight: Constants.weight.regular,
  lineHight: '4px',
};

export function Caption({ children }: CaptionProps) {
  return <p style={captionStyle}>{children}</p>;
}
