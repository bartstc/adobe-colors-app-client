import styled from 'styled-components';
import { device, color, fontWeight } from '../../utils/styles';
import chroma from 'chroma-js';

export const Wrapper = styled.section`
  padding: 60px 0;
  width: 100%;
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
    border-bottom: 1px solid ${color.grey};
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
`;

export const Color = styled.div`
  background: blue;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 240px;

  @media ${device.tablet} {
    height: 100%;
  }

  @media ${device.laptop} {
    margin-bottom: 1.5em;
  }
`;

export const ColorName = styled.p`
  font-size: 1.3rem;
  color: ${(props: { color: string }) =>
    chroma(props.color).luminance() <= 0.08 ? color.white : color.black};
`;

export const SaveBtn = styled.button`
  line-height: 2rem;
  font-size: 1.1rem;
  font-weight: ${fontWeight.semiBold};
  color: ${color.grey};
  background: none;
  border: none;
  padding: 0 0.8em;
  cursor: pointer;
`;
