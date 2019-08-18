import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { AuthForm, Title, Subtitle } from './Auth.styles';
import { useForm } from '../../hooks/useForm';
import { useAuthDispatch } from '../../context/authContext';
import { TextInputField } from '../../components/TextInputField/TextInputField';
import { Button } from '../../components/Button/Button';
import { IProps } from './Auth.interface';
import { Modal } from '../Modal/Modal';
import { SIGNIN } from './mutations';
import { Spinner } from '../Spinner/Spinner';
import { validationErrors } from '../../utils/validationErrors';
import { Signin, SigninVariables } from '../../schema/Signin';

const initState = {
  email: '',
  password: ''
};

export const SignIn: React.FC<IProps> = ({ onClose, showModal }) => {
  const dispatch = useAuthDispatch();
  const [errors, setErrors] = useState([]);

  const { handleChange, handleSubmit, reset, values } = useForm(() => {
    setErrors([]);
    signIn();
  }, initState);

  const [signIn, { loading }] = useMutation<Signin, SigninVariables>(SIGNIN, {
    update(_, { data }) {
      localStorage.setItem('jwtToken', data.signin.token);
      reset();
      onClose();
      dispatch({ type: 'SET_USER', payload: data.signin });
    },
    onError(err: any) {
      if (err.graphQLErrors[0].extensions.exception.errorFields)
        setErrors(err.graphQLErrors[0].extensions.exception.errorFields);
    },
    variables: {
      email: values.email,
      password: values.password
    }
  });

  const onCloseModal = () => {
    onClose();
    setErrors([]);
    reset();
  };

  return (
    <>
      <Modal show={showModal} closeModal={onCloseModal}>
        <AuthForm onSubmit={handleSubmit}>
          <Title>Sign In</Title>
          <Subtitle>Sign into your account here.</Subtitle>
          <TextInputField
            label="Enter email"
            placeholder=""
            id="signin-email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={validationErrors(errors, 'email')}
          />
          <TextInputField
            label="Enter password"
            placeholder=""
            id="signin-password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            error={validationErrors(errors, 'password')}
          />
          {loading ? <Spinner /> : <Button type="submit">Sign In</Button>}
        </AuthForm>
      </Modal>
    </>
  );
};
