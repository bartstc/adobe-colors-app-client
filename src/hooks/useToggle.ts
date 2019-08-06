import { useState } from 'react';

export const useToggle = (initialVal: boolean = false) => {
  // call useState, "reserve piece of state"
  const [toggle, setState] = useState<boolean | any>(initialVal);

  const setToggle = () => {
    setState(!toggle);
  };
  // return piece of state and a function to toggle it
  return [toggle, setToggle];
};
