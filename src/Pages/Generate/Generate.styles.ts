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
