import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import {
  HeaderWrapper,
  Logo,
  LogoTitle,
  Nav,
  Hamburger,
  Bar,
  NavList,
  NavItem,
  PageLink,
  AuthBtn,
  SettingsBtn
} from './Header.styles';
import { authLinks, unauthLinks } from '../../../utils/links';
import { useAuthDispatch, useAuthState } from '../../../context/authContext';

interface IProps extends RouteComponentProps<any> {
  toggled: boolean;
  onToggle: () => void;
  onSignUpToggle: () => void;
  onSignInToggle: () => void;
}

const Header: React.FC<IProps> = ({
  onToggle,
  onSignUpToggle,
  onSignInToggle,
  toggled,
  history
}) => {
  const dispatch = useAuthDispatch();
  const { isAuth } = useAuthState();

  const onLogout = async () => {
    localStorage.removeItem('jwtToken');
    dispatch({ type: 'LOGOUT_USER' });
    history.push('/');
  };

  return (
    <HeaderWrapper>
      <Logo to="/">
        <LogoTitle>Adobe Colors Clone</LogoTitle>
      </Logo>
      <Nav>
        <Hamburger aria-label="open menu" title="Menu" onClick={onToggle}>
          <Bar toggled={toggled} />
          <Bar toggled={toggled} />
          <Bar toggled={toggled} />
          <Bar toggled={toggled} />
        </Hamburger>
        <NavList>
          {isAuth
            ? authLinks.map(({ path, name }) => (
                <NavItem key={path}>
                  <PageLink exact to={path}>
                    {name}
                  </PageLink>
                </NavItem>
              ))
            : unauthLinks.map(({ path, name }) => (
                <NavItem key={path}>
                  <PageLink exact to={path}>
                    {name}
                  </PageLink>
                </NavItem>
              ))}
        </NavList>
        <NavList>
          {isAuth && (
            <NavItem>
              <AuthBtn onClick={onLogout}>Logout</AuthBtn>
            </NavItem>
          )}
          {!isAuth && (
            <NavItem>
              <AuthBtn onClick={onSignInToggle}>Sign In</AuthBtn>
            </NavItem>
          )}
          {!isAuth && (
            <NavItem>
              <AuthBtn onClick={onSignUpToggle}>Sign Up</AuthBtn>
            </NavItem>
          )}
        </NavList>
        <SettingsBtn>
          <i className="fas fa-cog" />
        </SettingsBtn>
      </Nav>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
