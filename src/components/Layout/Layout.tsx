import React from 'react';
import { useToggle } from '../../hooks/useToggle';
import { LayoutWrapper, Main } from './Layout.styles';
import { useAuthState } from '../../context/authContext';

import { Header } from './layout/Header';
import SideDrawer from './layout/SideDrawer';
import { SignUp } from '../Auth/SignUp';
import { SignIn } from '../Auth/SignIn';

interface IProps {
  children: JSX.Element | JSX.Element[] | any; // any! -> FIX LATER
}

export const Layout: React.FC<IProps> = ({ children }) => {
  const { isAuth } = useAuthState();

  const [showSignUp, setSignUp] = useToggle(false);
  const [showSignIn, setSignIn] = useToggle(false);
  const [toggle, setToggle] = useToggle(false);

  const onToggle = () => setToggle(!toggle);

  const onClose = () => setToggle(false);

  return (
    <LayoutWrapper>
      <Header
        onToggle={onToggle}
        onSignUpToggle={setSignUp}
        onSignInToggle={setSignIn}
        toggled={toggle}
      />
      <SignUp show={showSignUp} onClose={setSignUp} />
      <SignIn show={showSignIn} onClose={setSignIn} />
      <SideDrawer
        toggle={toggle}
        isAuth={isAuth}
        onClose={onClose}
        onSignUpToggle={setSignUp}
        onSignInToggle={setSignIn}
      />
      <Main>{children}</Main>
    </LayoutWrapper>
  );
};
