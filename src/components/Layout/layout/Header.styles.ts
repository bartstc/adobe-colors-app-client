import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { device, color, fontWeight } from '../../../utils/styles';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5em;
  position: fixed;
  z-index: 10;

  @media ${device.tablet} {
    padding: 0 1em;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LogoTitle = styled.h1`
  font-size: 1.2rem;
  color: ${color.grey};

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const Nav = styled.nav`
  @media ${device.laptop} {
    display: flex;
    align-items: center;
  }
`;

export const Bar = styled.span`
  position: absolute;
  display: block;
  height: 4px;
  width: 30px;
  background: ${color.grey};
  border-radius: 5px;
  transition: all 0s 0.2s;

  &:nth-child(1) {
    top: 9px;
    left: 7px;
    transition: 0.2s 0.2s, opacity 0s 0.2s;

    ${(props: { toggled: boolean }) =>
      props.toggled &&
      `
      top: 18px;
      opacity: 0;
      transition: 0.2s 0s, opacity 0s 0.2s;
    `}
  }

  &:nth-child(2) {
    top: 18px;
    left: 7px;
    transition: 0.2s 0s;

    ${(props: { toggled: boolean }) =>
      props.toggled &&
      `
      transform: rotate(-45deg);
      transition: 0.2s 0.2s;
    `}
  }

  &:nth-child(3) {
    top: 18px;
    left: 7px;
    transition: 0.2s 0s;

    ${props =>
      props.toggled &&
      `
      transform: rotate(45deg);
      transition: 0.2s 0.2s;
    `}
  }

  &:nth-child(4) {
    top: 27px;
    left: 7px;
    transition: 0.2s 0.2s, opacity 0s 0.2s;

    ${props =>
      props.toggled &&
      `
      top: 18px;
      opacity: 0;
      transition: 0.2s 0s, opacity 0s 0.2s;
    `}
  }
`;

export const Hamburger = styled.button`
  position: relative;
  width: 45px;
  height: 42px;
  box-sizing: border-box;
  cursor: pointer;
  background: none;
  border: none;

  @media ${device.laptop} {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: none;
  align-items: center;
  justify-content: space-around;
  border-right: 1px solid ${color.grey};
  padding: 0 1.3em;

  @media ${device.laptop} {
    display: flex;
  }
`;

export const NavItem = styled.li`
  padding: 0 0.8em;
`;

export const PageLink = styled(NavLink)`
  line-height: 2rem;
  font-size: 1.1rem;
  font-weight: ${fontWeight.semiBold};
  color: ${color.grey};

  &.active {
    color: ${color.white};
    font-weight: ${fontWeight.semiBold};
  }
`;

export const AuthBtn = styled.button`
  line-height: 2rem;
  font-size: 1.1rem;
  font-weight: ${fontWeight.semiBold};
  color: ${color.grey};
  background: none;
  border: none;
  cursor: pointer;

  &.active {
    color: ${color.white};
    font-weight: ${fontWeight.semiBold};
  }
`;

export const SettingsBtn = styled.button`
  display: none;
  width: 45px;
  height: 45px;
  cursor: pointer;
  background: none;
  border: none;
  color: ${color.grey};
  font-size: 1.3rem;
  margin-left: 0.9em;

  @media ${device.laptop} {
    display: block;
  }
`;
