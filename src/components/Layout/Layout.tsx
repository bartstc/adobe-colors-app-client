import React from 'react';

import { useToggle } from '../../hooks/useToggle';
import { LayoutWrapper, Main } from './Layout.styles';
import { useAuthState } from '../../context/authContext';
import Header from './layout/Header';
import SideDrawer from './layout/SideDrawer';
import { SignUp } from '../Auth/SignUp';
import { SignIn } from '../Auth/SignIn';
import AuthOptions from '../Auth/AuthOptions';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout: React.FC<IProps> = ({ children }) => {
  const { isAuth } = useAuthState();

  const [showSignUp, setSignUp] = useToggle(false);
  const [showSignIn, setSignIn] = useToggle(false);
  const [showAuthOptions, setAuthOptions] = useToggle(false);
  const [toggle, setToggle] = useToggle(false);

  const onToggle = () => setToggle(!toggle);

  const onClose = () => setToggle(false);

  return (
    <LayoutWrapper>
      <Header
        onToggle={onToggle}
        onSignUpToggle={setSignUp}
        onSignInToggle={setSignIn}
        onAuthOptionsToggle={setAuthOptions}
        toggled={toggle}
      />
      {!isAuth && <SignUp showModal={showSignUp} onClose={setSignUp} />}
      {!isAuth && <SignIn showModal={showSignIn} onClose={setSignIn} />}
      {isAuth && (
        <AuthOptions showModal={showAuthOptions} onClose={setAuthOptions} />
      )}
      <SideDrawer
        toggle={toggle}
        onClose={onClose}
        onSignUpToggle={setSignUp}
        onSignInToggle={setSignIn}
        onAuthOptionsToggle={setAuthOptions}
      />
      <Main>{children}</Main>
    </LayoutWrapper>
  );
};
