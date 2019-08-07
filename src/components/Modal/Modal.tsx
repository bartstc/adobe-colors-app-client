import React from 'react';
import { Backdrop, ModalWrapper } from './Modal.styles';

interface IProps {
  children: JSX.Element | JSX.Element[] | any;
  closeModal: () => void;
  show: boolean;
}

export const Modal: React.FC<IProps> = ({ closeModal, show, children }) => {
  // const [showPopup, setShowPopup] = useState(false);
  // const [errorMsg, setErrorMsg] = useState(null);

  // const handlePopup = () => {
  //   setShowPopup(true);
  //   setTimeout(() => {
  //     setShowPopup(false);
  //   }, 3000);
  // };

  return (
    <>
      {/* <Popup show={showPopup} message={errorMsg} /> */}
      <Backdrop show={show} onClick={closeModal} />
      <ModalWrapper show={show}>{children}</ModalWrapper>
    </>
  );
};
