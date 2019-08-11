import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useAuthDispatch } from '../../../context/authContext';
import { Links, Wrapper, Link, Btn } from './SideDrawer.styles';
import { authLinks, unauthLinks } from '../../../utils/links';

interface IProps extends RouteComponentProps<any> {
  toggle: boolean;
  isAuth: boolean | null;
  onClose: () => void;
  onSignUpToggle: () => void;
  onSignInToggle: () => void;
}

const SideDrawer: React.FC<IProps> = ({
  toggle,
  isAuth,
  onClose,
  history,
  onSignUpToggle,
  onSignInToggle
}) => {
  const dispatch = useAuthDispatch();

  const onLogout = async () => {
    localStorage.removeItem('jwtToken');
    dispatch({ type: 'LOGOUT_USER' });
    history.push('/');
  };

  return (
    <Wrapper onClick={onClose} toggled={toggle}>
      <Links>
        {isAuth
          ? authLinks.map(({ path, name }) => (
              <Link exact key={name} to={path}>
                {name}
              </Link>
            ))
          : unauthLinks.map(({ path, name }) => (
              <Link exact key={name} to={path}>
                {name}
              </Link>
            ))}
        {!isAuth && <Btn onClick={onSignInToggle}>Sign In</Btn>}
        {!isAuth && <Btn onClick={onSignUpToggle}>Sign Up</Btn>}
        {isAuth && <Btn onClick={onLogout}>Logout</Btn>}
        <Btn>Settings</Btn>
      </Links>
    </Wrapper>
  );
};

export default withRouter(SideDrawer);
