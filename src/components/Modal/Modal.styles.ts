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
  max-width: 370px;
  height: 72vh;
  max-height: 380px;
  padding: 30px 12px;
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

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  @media ${device.tablet} {
    top: 95px;
    padding-top: 30px;
  }
`;
