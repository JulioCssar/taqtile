import { InputHTMLAttributes } from 'react';
import { colors } from '../typography/colors';
import './input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
 label: string;
 error ?: boolean;
}

export function Input({error, label}: InputProps) {
  const inputStyle = {
    borderColor: error ? colors.statesError : colors.baseGray,

  };
  return (
    <div className='container-input'>
      <label>{label}</label>
      <input style={inputStyle} className='input'/>
    </div>
  );
}
