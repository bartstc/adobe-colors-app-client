import React from 'react';
import {
  AuthForm,
  Title,
  Subtitle,
  ModalWrapper,
  Backdrop
} from './Auth.styles';
import { useForm } from '../../hooks/useForm';
import { useAuthDispatch } from '../../context/authContext';
import { setToken } from '../../utils/setToken';

import { TextInputField } from '../../components/TextInputField/TextInputField';
import { Button } from '../../components/Button/Button';
import { IProps } from './Auth.interface';

const initState = {
  username: '',
  email: '',
  password: ''
};

export const SignUp: React.FC<IProps> = ({ onClose, show }) => {
  const dispatch = useAuthDispatch();

  const { handleChange, handleSubmit, reset, values } = useForm(() => {
    onSubmit();
  }, initState);

  const onSubmit = async () => {
    try {
      // handle register mutation
      // localStorage.setItem('jwtToken', res.token);
      // setToken(res.token);
      // history.push('/');
      // dispatch({ type: 'SET_USER', payload: res });
    } catch (err) {
      reset();
      // handle errors in inputs
    }
  };

  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      <ModalWrapper show={show}>
        <AuthForm onSubmit={handleSubmit}>
          <Title>Sign Up</Title>
          <Subtitle>Sign up to collect your color.</Subtitle>
          <TextInputField
            label="Enter username"
            placeholder=""
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <TextInputField
            label="Enter email"
            placeholder=""
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <TextInputField
            label="Enter password"
            placeholder=""
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          <Button type="submit">Sign Up</Button>
        </AuthForm>
      </ModalWrapper>
    </>
  );
};
