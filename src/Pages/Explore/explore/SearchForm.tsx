import React, { ChangeEvent } from 'react';
import { Form, Label, Input } from './SearchForm.styles';

interface IProps {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchForm: React.FC<IProps> = ({ value, handleChange }) => (
  <Form>
    <Label htmlFor="query">Filter:</Label>
    <Input
      placeholder=""
      id="query"
      name="query"
      value={value}
      onChange={handleChange}
    />
  </Form>
);
