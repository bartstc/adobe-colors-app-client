import styled from 'styled-components';
import { color, device, fontWeight } from '../../../utils/styles';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  position: fixed;
  z-index: 5;
  right: 0;
  top: 0;
  transform: ${(props: { toggled: boolean }) =>
    props.toggled ? 'translateX(0)' : 'translateX(100%)'};
  width: 260px;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  background: #000;
  transition: transform 0.3s ease;
  padding-top: 140px;

  @media ${device.laptop} {
    display: none;
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Link = styled(NavLink)`
  line-height: 2rem;
  font-size: 1.1rem;
  font-weight: ${fontWeight.semiBold};
  color: ${color.grey};

  &.active {
    color: ${color.white};
    font-weight: ${fontWeight.semiBold};
  }

  @media ${device.tablet} {
    font-size: 1.3rem;
    line-height: 2.5rem;
  }
`;

export const Btn = styled.button`
  line-height: 2rem;
  font-size: 1.1rem;
  font-weight: ${fontWeight.semiBold};
  color: ${color.grey};
  background: none;
  border: none;
  cursor: pointer;

  @media ${device.tablet} {
    font-size: 1.3rem;
    line-height: 2.5rem;
  }
`;
