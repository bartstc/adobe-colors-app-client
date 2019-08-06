import React from 'react';
import { useToggle } from '../../hooks/useToggle';
import { LayoutWrapper } from './Layout.styles';
import { useAuthState } from '../../context/authContext';

import { Header } from './layout/Header';
import SideDrawer from './layout/SideDrawer';

interface IProps {
  children: JSX.Element | JSX.Element[] | any; // any! -> FIX LATER
}

export const Layout: React.FC<IProps> = ({ children }) => {
  const { isAuth } = useAuthState();

  const [toggle, setToggle] = useToggle();

  const onToggle = () => setToggle(!toggle);

  const onClose = () => setToggle(false);

  return (
    <LayoutWrapper>
      <Header onToggle={onToggle} toggled={toggle} />
      <SideDrawer toggle={toggle} isAuth={isAuth} onClose={onClose} />
      {children}
    </LayoutWrapper>
  );
};
