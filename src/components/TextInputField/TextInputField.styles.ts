import styled from 'styled-components';
import { color } from '../../utils/styles';

export const Label = styled.label`
  font-size: 0.9rem;
  color: ${color.accent};
  font-weight: 300;
  margin-bottom: 0.4em;
  width: 100%;
  margin-top: 1.5em;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 0.8em;
  border: ${(props: { error: string | undefined }) =>
    props.error ? '1px solid red' : '1px solid' + color.accent};
  border-radius: 8px;
  font-size: 1rem;

  &::placeholder {
    color: #333;
    font-size: 1rem;
  }
`;

export const Error = styled.span`
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: red;
  margin-top: 0.35em;
  width: 100%;
`;
