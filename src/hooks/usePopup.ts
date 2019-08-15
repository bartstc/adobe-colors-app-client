import { useState } from 'react';

export const usePopup = () => {
  const [show, setShow] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handlePopup = (
    message: string = 'Something goes wrong. Please refresh'
  ) => {
    setShow(true);
    setErrorMsg(message);
    setTimeout(() => {
      setShow(false);
      setErrorMsg('');
    }, 4000);
  };

  return { handlePopup, show, errorMsg };
};
