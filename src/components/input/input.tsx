import { forwardRef, InputHTMLAttributes } from 'react';
import { theme } from '../typography/theme';
import './input.css';
import { Label } from '../typography/label/typography';
import { Caption } from '../typography/caption/caption';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, label, ...rest }, ref) => {
  const inputStyle = {
    borderColor: error ? theme.statesError : theme.baseGray,
  };
  return (
    <div className='container-input'>
      <Label error={error}>{label}</Label>
      <input ref={ref} {...rest} style={inputStyle} className='input' />
      {error && <Caption>{error}</Caption>}
    </div>
  );
});
