import styled from 'styled-components';
import { device, color } from '../../../utils/styles';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 280px;
  margin: 0 auto;
  margin-top: 0.7em;

  @media ${device.tablet} {
    width: auto;
    flex-direction: row;
    margin: 0;
  }
`;

export const Label = styled.label`
  line-height: 1.6rem;
  margin-right: 0.4em;
  font-size: 0.9rem;
  line-height: 1.7rem;
  flex: 0.25;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${color.black};
  flex: 0.75;
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
  padding: 0.4em;
  background: none;
  border: none;
  font-size: 1.2rem;
  margin-left: 0.4em;

  @media ${device.tablet} {
    margin-top: 0;
  }

  @media ${device.laptop} {
    margin-left: 0.9em;
  }
`;
