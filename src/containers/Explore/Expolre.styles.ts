import styled from 'styled-components';
import { device, color, fontWeight } from '../../utils/styles';

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
    flex-direction: row;
    justify-content: space-between;
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

export const PanelContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5em;
  width: 300px;

  @media ${device.tablet} {
    margin-top: 0;
    width: 330px;
    padding-left: 0.8em;
    margin-left: 1.2em;
    border-left: 1px solid ${color.grey};
  }
`;
