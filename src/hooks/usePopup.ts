import { useState, useEffect } from 'react';

export const usePopup = () => {
  const [show, setShow] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handlePopup = (
    message: string = 'Something goes wrong. Please refresh'
  ) => {
    setShow(true);
    setErrorMsg(message);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setErrorMsg('');
    }, 4000);
    return () => clearTimeout(timer);
  }, [show]);

  return { handlePopup, show, errorMsg };
};
