import React from 'react';

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
} from './Navigation.styles';
import { useAuthState } from '../../../../context/authContext';
import { authLinks, unauthLinks } from '../../../../utils/links';

interface IProps {
  toggled: boolean;
  onToggle: () => void;
  onSignUpToggle: () => void;
  onSignInToggle: () => void;
  onAuthOptionsToggle: () => void;
  onLogout: () => Promise<void>;
}

export const Navigation: React.FC<IProps> = ({
  toggled,
  onToggle,
  onSignUpToggle,
  onSignInToggle,
  onAuthOptionsToggle,
  onLogout
}) => {
  const { isAuth } = useAuthState();

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
        {isAuth && (
          <SettingsBtn onClick={onAuthOptionsToggle}>
            <i className="fas fa-cog" />
          </SettingsBtn>
        )}
      </Nav>
    </HeaderWrapper>
  );
};
