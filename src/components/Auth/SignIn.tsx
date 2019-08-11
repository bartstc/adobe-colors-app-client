import React, { useState } from 'react';
import { AuthForm, Title, Subtitle } from './Auth.styles';
import { useForm } from '../../hooks/useForm';
import { useAuthDispatch } from '../../context/authContext';
import { TextInputField } from '../../components/TextInputField/TextInputField';
import { Button } from '../../components/Button/Button';
import { IProps } from './Auth.interface';
import { Modal } from '../Modal/Modal';
import { useMutation } from '@apollo/react-hooks';
import { SIGNIN_USER } from './mutations';
import { Spinner } from '../Spinner/Spinner';
import { Popup } from '../Popup/Popup';
import { validationErrors } from '../../utils/validationErrors';

const initState = {
  email: '',
  password: ''
};

export const SignIn: React.FC<IProps> = ({ onClose, show }) => {
  const dispatch = useAuthDispatch();
  const [errors, setErrors] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { handleChange, handleSubmit, reset, values } = useForm(() => {
    onSubmit();
  }, initState);

  const onSubmit = () => {
    setErrors([]);
    signIn();
  };

  const [signIn, { loading }] = useMutation(SIGNIN_USER, {
    update(_, result) {
      console.log(result.data.signin);

      localStorage.setItem('jwtToken', result.data.signin.token);
      dispatch({ type: 'SET_USER', payload: result.data.signin });
      reset();
      onClose();
      handlePopup('Logged in successfully');
    },
    onError(err: any) {
      console.log(err);

      if (err.graphQLErrors[0].extensions.exception.errorFields)
        setErrors(err.graphQLErrors[0].extensions.exception.errorFields);
    },
    variables: values
  });

  const onCloseModal = () => {
    onClose();
    setErrors([]);
    reset();
  };

  const handlePopup = (message: string) => {
    setShowPopup(true);
    setErrorMsg(message);
    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  return (
    <>
      <Popup show={showPopup} message={errorMsg} />
      <Modal show={show} closeModal={onCloseModal}>
        <AuthForm onSubmit={handleSubmit}>
          <Title>Sign In</Title>
          <Subtitle>Sign into your account here.</Subtitle>
          <TextInputField
            label="Enter email"
            placeholder=""
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={validationErrors(errors, 'email')}
          />
          <TextInputField
            label="Enter password"
            placeholder=""
            id="password"
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
