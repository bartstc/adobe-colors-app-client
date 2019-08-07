import styled from 'styled-components';
import { device, color } from '../../utils/styles';

export const Backdrop = styled.div`
  display: ${(props: { show: boolean }) => (props.show ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 20;
  left: 0;
  top: 0;
  background: ${color.grey};
  opacity: 0.25;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 92%;
  max-width: 450px;
  padding: 15px 10px;
  top: 75px;
  left: calc(-50vw + 50%);
  right: calc(-50vw + 50%);
  margin-left: auto;
  margin-right: auto;
  transition: all 0.3s ease-out;
  overflow-y: scroll;
  overflow-x: hidden;
  transform: ${(props: { show: boolean }) =>
    props.show ? 'translateY(0)' : 'translateY(-100vh)'};
  opacity: ${(props: { show: boolean }) => (props.show ? '1' : '0')};
  border-radius: 20px;

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  @media ${device.tablet} {
    top: 95px;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  margin: 0 auto;
  padding-bottom: 2em;
  height: 100%;

  @media ${device.tablet} {
    width: 340px;
  }
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 300;
  border-bottom: 1px solid ${color.black};
  line-height: 2em;
  width: 100%;
  text-align: center;

  @media ${device.tablet} {
    font-size: 2.2rem;
  }
`;

export const Subtitle = styled.p`
  margin-top: 0.7em;
  font-size: 0.9rem;
  line-height: 1em;
  margin-bottom: 1.4em;
  text-align: center;
  max-width: 280px;

  @media ${device.tablet} {
    font-size: 1.1rem;
    max-width: 370px;
    margin-top: 1.5em;
  }
`;
