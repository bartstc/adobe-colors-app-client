import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { useAuthDispatch } from '../../../context/authContext';
import { useMutation } from '@apollo/react-hooks';
import { LogoutUser } from '../../../schema/LogoutUser';
import { LOGOUT_USER } from '../mutations';
import { usePopup } from '../../../hooks/usePopup';
import { Popup } from '../../Popup/Popup';
import { Navigation } from './header/Navigation';

interface IProps extends RouteComponentProps<any> {
  toggled: boolean;
  onToggle: () => void;
  onSignUpToggle: () => void;
  onSignInToggle: () => void;
  onAuthOptionsToggle: () => void;
}

const Header: React.FC<IProps> = props => {
  const dispatch = useAuthDispatch();
  const { handlePopup, show, errorMsg } = usePopup();

  const [logoutUser] = useMutation<LogoutUser>(LOGOUT_USER, {
    onError(err) {
      if (err) handlePopup();
    }
  });

  const onLogout = async () => {
    await logoutUser();
    localStorage.removeItem('jwtToken');
    props.history.push('/');
    dispatch({ type: 'LOGOUT_USER' });
  };

  return (
    <>
      <Popup show={show} message={errorMsg} />
      <Navigation {...props} onLogout={onLogout} />
    </>
  );
};

export default withRouter(Header);
