import React from 'react';
import { Backdrop, ModalWrapper } from './Modal.styles';

interface IProps {
  children: JSX.Element | JSX.Element[] | any;
  closeModal: () => void;
  show: boolean;
}

export const Modal: React.FC<IProps> = ({ closeModal, show, children }) => (
  <>
    <Backdrop show={show} onClick={closeModal} />
    <ModalWrapper show={show}>{children}</ModalWrapper>
  </>
);
