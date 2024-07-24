import { InputHTMLAttributes } from 'react';
import { theme } from '../typography/theme';
import './input.css';
import { Label } from '../typography/label/typography';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
}

export function Input({ error, label }: InputProps) {
  const inputStyle = {
    borderColor: error ? theme.statesError : theme.baseGray,
  };
  return (
    <div className='container-input'>
      <Label>{label}</Label>
      <input style={inputStyle} className='input' />
    </div>
  );
}
