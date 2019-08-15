import styled from 'styled-components';
import chroma from 'chroma-js';
import { device, color } from '../../../../utils/styles';

export const Wrapper = styled.li`
  height: 240px;

  @media ${device.tablet} {
    height: 100%;
  }
`;

export const Color = styled.div`
  background: ${(props: { color: string }) => props.color};
  height: 160px;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    height: 70%;
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
