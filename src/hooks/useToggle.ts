import { useState } from 'react';

export const useToggle = (initialVal: boolean = false) => {
  const [toggle, setState] = useState<boolean | any>(initialVal);

  const setToggle = () => {
    setState(!toggle);
  };
  return [toggle, setToggle];
};
