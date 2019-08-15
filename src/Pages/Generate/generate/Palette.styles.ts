import styled from 'styled-components';
import { device } from '../../../utils/styles';

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
