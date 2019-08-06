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
} from './Header.styles';

interface IProps {
  toggled: boolean;
  onToggle: () => void;
}

export const Header: React.FC<IProps> = ({ onToggle, toggled }) => (
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
        <NavItem>
          <PageLink exact to="/generate">
            Generate
          </PageLink>
        </NavItem>
        <NavItem>
          <PageLink exact to="/">
            Explore
          </PageLink>
        </NavItem>
        <NavItem>
          <PageLink exact to="/library">
            Library
          </PageLink>
        </NavItem>
      </NavList>
      <NavList>
        <NavItem>
          <AuthBtn>Sign In</AuthBtn>
        </NavItem>
        <NavItem>
          <AuthBtn>Sign Up</AuthBtn>
        </NavItem>
      </NavList>
      <SettingsBtn>
        <i className="fas fa-cog" />
      </SettingsBtn>
    </Nav>
  </HeaderWrapper>
);
