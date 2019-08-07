import React from 'react';
import { PopupWrapper } from './Popup.styles';

interface IProps {
  show: boolean;
  message: string;
}

export const Popup: React.FC<IProps> = ({ show, message }) => (
  <PopupWrapper show={show}>{message}</PopupWrapper>
);
