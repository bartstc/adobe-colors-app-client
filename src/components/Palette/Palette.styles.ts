import styled from 'styled-components';
import { fontWeight, color } from '../../utils/styles';

export const Wrapper = styled.li``;

export const PaletteHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.8em;
`;

export const PaletteTitle = styled.h2`
  font-size: 0.9rem;
  font-weight: ${fontWeight.light};
`;

export const PaletteInfo = styled.div`
  display: flex;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.8em;
`;

export const InfoText = styled.p`
  font-size: 0.8rem;
  margin-left: 0.4em;
`;

export const ActionPanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
`;

export const Colors = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 60px;
  border-radius: 10px;
  overflow: hidden;

  &:hover ${ActionPanel} {
    opacity: 1;
  }
`;

export const Color = styled.li`
  background: red;
`;

export const ActionBtn = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  padding: 0.3em 0.6em;
  margin: 0 0.4em;
  color: rgba(255, 255, 255, 0.75);
  transition: color 0.15s ease-in-out;
  font-weight: ${fontWeight.semiBold};
  cursor: pointer;

  i {
    margin-right: 0.4em;
    font-size: 1.2rem;
  }

  &:hover {
    color: ${color.white};
  }
`;
