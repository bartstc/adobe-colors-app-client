import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { AuthForm, Title, Subtitle } from './Auth.styles';
import { useForm } from '../../hooks/useForm';
import { TextInputField } from '../../components/TextInputField/TextInputField';
import { Button } from '../../components/Button/Button';
import { IProps } from './Auth.interface';
import { Modal } from '../Modal/Modal';
import { SIGNUP } from './mutations';
import { validationErrors } from '../../utils/validationErrors';
import { Spinner } from '../Spinner/Spinner';
import { Popup } from '../Popup/Popup';
import { Signup, SignupVariables } from '../../schema/Signup';
import { usePopup } from '../../hooks/usePopup';

const initState = {
  username: '',
  email: '',
  password: ''
};

export const SignUp: React.FC<IProps> = ({ onClose, showModal }) => {
  const { handlePopup, show, errorMsg } = usePopup();
  const [errors, setErrors] = useState([]);

  const { handleChange, handleSubmit, reset, values } = useForm(() => {
    onSubmit();
  }, initState);

  const onSubmit = () => {
    setErrors([]);
    signUp();
  };

  const [signUp, { loading }] = useMutation<Signup, SignupVariables>(SIGNUP, {
    update(_, __) {
      reset();
      onClose();
      handlePopup('User registered successfully. Please sign in');
    },
    onError(err: any) {
      if (err.graphQLErrors[0].extensions.exception.errorFields)
        setErrors(err.graphQLErrors[0].extensions.exception.errorFields);
    },
    variables: {
      email: values.email,
      password: values.password,
      username: values.username
    }
  });

  const onCloseModal = () => {
    onClose();
    setErrors([]);
    reset();
  };

  return (
    <>
      <Popup show={show} message={errorMsg} />
      <Modal show={showModal} closeModal={onCloseModal}>
        <AuthForm onSubmit={handleSubmit}>
          <Title>Sign Up</Title>
          <Subtitle>Sign up to collect your color.</Subtitle>
          <TextInputField
            label="Enter username"
            placeholder=""
            id="signup-username"
            name="username"
            value={values.username}
            onChange={handleChange}
            error={validationErrors(errors, 'username')}
          />
          <TextInputField
            label="Enter email"
            placeholder=""
            id="signup-email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={validationErrors(errors, 'email')}
          />
          <TextInputField
            label="Enter password"
            placeholder=""
            id="signup-password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            error={validationErrors(errors, 'password')}
          />
          {loading ? <Spinner /> : <Button type="submit">Sign Up</Button>}
        </AuthForm>
      </Modal>
    </>
  );
};
