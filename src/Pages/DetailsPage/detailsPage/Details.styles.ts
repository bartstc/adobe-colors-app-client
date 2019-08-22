import styled from 'styled-components';
import chroma from 'chroma-js';
import { device, color, fontWeight } from '../../../utils/styles';

export const Wrapper = styled.section`
  padding: 60px 0;
  width: 100vw;
`;

export const Panel = styled.div`
  width: 100vw;
  padding: 0 0.5em;
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    height: 60px;
    padding: 0 1em;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PaletteList = styled.ul`
  padding: 0 0.5em;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 320px;
  margin: 0 auto;
  padding-top: 2em;
  grid-row-gap: 2.5em;
  min-height: calc(100vh - 180px);

  @media ${device.tablet} {
    padding: 0 1em;
    padding-top: 3.5em;
    max-width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: none;
    grid-gap: 1em;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(5, 1fr);
  }

  @media ${device.laptopL} {
    padding: 0;
    padding-top: 3.5em;
    max-width: 1400px;
    margin: 0 auto;
  }
`;

export const PanelTitle = styled.h2`
  font-weight: ${fontWeight.regural};
  font-size: 1.3rem;
  line-height: 2.7rem;
  margin-top: 0.5em;

  @media ${device.tablet} {
    font-size: 1.1rem;
    margin-top: 0;
  }

  span {
    font-weight: ${fontWeight.semiBold};
  }
`;

export const CopyOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
`;

export const OverlayText = styled.p`
  color: ${color.white};
  background: ${color.black};
  font-weight: ${fontWeight.semiBold};
  padding: 0.3em;
  font-size: 1.4rem;
  text-transform: uppercase;
  text-align: center;
`;

export const Color = styled.div`
  position: relative;
  background: ${(props: { color: string }) => props.color};
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 240px;
  cursor: pointer;

  @media ${device.tablet} {
    height: 100%;
  }

  @media ${device.laptop} {
    margin-bottom: 1.5em;
  }

  &:hover ${CopyOverlay} {
    opacity: 1;
  }
`;

export const ColorName = styled.p`
  font-size: 1.3rem;
  color: ${(props: { color: string }) =>
    chroma(props.color).luminance() <= 0.08 ? color.white : color.black};
`;
