import React, { ChangeEvent } from 'react';
import { Input, Label, Error } from './TextInputField.styles';

interface IProps {
  name: string;
  id: string;
  placeholder: string;
  value: string;
  label: string;
  error?: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextInputField: React.FC<IProps> = ({
  name,
  id,
  placeholder,
  value,
  label,
  error,
  type = 'text',
  onChange
}) => (
  <>
    <Label htmlFor={id}>{label}</Label>
    <Input
      type={type}
      id={id}
      error={error}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
    {error && <Error>{error}</Error>}
  </>
);
