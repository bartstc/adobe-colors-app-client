import styled from 'styled-components';
import { device, color } from '../../../utils/styles';

export const Palettes = styled.ul`
  padding: 0 0.5em;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 500px;
  margin: 0 auto;
  padding-top: 2em;
  grid-row-gap: 1.8em;

  @media ${device.tablet} {
    padding: 0 1em;
    padding-top: 3.5em;
    max-width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.4em;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptopL} {
    padding: 0;
    padding-top: 3.5em;
    max-width: 1400px;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Warning = styled.p`
  font-size: 0.9rem;
  color: ${color.grey};

  @media ${device.tablet} {
    font-size: 1rem;
  }
`;
