import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { setToken } from '../../../utils/setToken';
import { useAuthDispatch } from '../../../context/authContext';
import { Links, Wrapper, Link, Btn } from './SideDrawer.styles';

const authLinks = [
  {
    path: '/generate',
    name: 'Generate'
  }
];

const unauthLinks = [
  {
    path: '/generate',
    name: 'Generate'
  },
  {
    path: '/',
    name: 'Explore'
  },
  {
    path: '/library',
    name: 'Library'
  }
];

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
  const { dispatch } = useAuthDispatch();

  const onLogout = async () => {
    localStorage.removeItem('jwtToken');
    setToken(); // clear axios headers
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
        {isAuth && <Btn onClick={onLogout}>Logout</Btn>}
        <Btn onClick={onSignInToggle}>Sign In</Btn>
        <Btn onClick={onSignUpToggle}>Sign Up</Btn>
        <Btn>Settings</Btn>
      </Links>
    </Wrapper>
  );
};

export default withRouter(SideDrawer);
