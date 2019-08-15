import styled from 'styled-components';
import { device, color, fontWeight } from '../../../utils/styles';

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  margin: 0 auto;

  @media ${device.tablet} {
    width: auto;
    flex-direction: row;
    margin: 0;
  }
`;

export const InputGroup = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;

  @media ${device.tablet} {
    height: 40px;
    margin-right: 0.95em;
  }
`;

export const Label = styled.label`
  line-height: 1.6rem;
  margin-right: 0.4em;
  font-size: 0.9rem;
  line-height: 1.7rem;
  flex: 0.2;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${color.black};
  flex: 0.8;
  height: 26px;

  @media ${device.tablet} {
    width: 140px;
  }

  @media ${device.laptop} {
    width: 190px;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0.4em 2.1em;
  background: none;
  border: 1px solid ${color.black};
  border-radius: 20px;
  margin-top: 0.9em;
  cursor: pointer;

  p {
    margin-left: 0.4em;
  }

  @media ${device.tablet} {
    margin-top: 0;
  }

  @media ${device.laptop} {
    margin-left: 0.9em;
  }
`;
