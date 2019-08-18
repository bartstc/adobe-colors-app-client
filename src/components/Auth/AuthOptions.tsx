import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { useAuthDispatch } from '../../context/authContext';
import { Button } from '../../components/Button/Button';
import { Modal } from '../Modal/Modal';
import { DELETE_USER } from './mutations';
import { Spinner } from '../Spinner/Spinner';
import { DeleteUser } from '../../schema/DeleteUser';
import { usePopup } from '../../hooks/usePopup';
import { Popup } from '../Popup/Popup';
import { Subtitle } from './Auth.styles';

interface IProps extends RouteComponentProps<any> {
  onClose: () => void;
  showModal: boolean;
}

const AuthOptions: React.FC<IProps> = ({ onClose, showModal, history }) => {
  const dispatch = useAuthDispatch();
  const { handlePopup, show, errorMsg } = usePopup();

  const [deleteUser, { loading }] = useMutation<DeleteUser>(DELETE_USER, {
    onError(err: any) {
      if (err) handlePopup();
    },
    update() {
      localStorage.removeItem('jwtToken');
      history.push('/');
      dispatch({ type: 'LOGOUT_USER' });
    }
  });

  const deleteAccount = async () => {
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      await deleteUser();
    }
  };

  return (
    <>
      <Popup show={show} message={errorMsg} />
      <Modal show={showModal} closeModal={onClose}>
        <Subtitle>Delete account</Subtitle>
        {loading ? (
          <Spinner />
        ) : (
          <Button type="button" onClick={deleteAccount}>
            Delete account
          </Button>
        )}
      </Modal>
    </>
  );
};

export default withRouter(AuthOptions);
