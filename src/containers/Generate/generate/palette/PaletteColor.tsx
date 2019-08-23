import React, { useState, useEffect } from 'react';
import { SliderPicker } from 'react-color';

import { Wrapper, Color, ColorName } from './PaletteColor.styles';
import { randomColor } from '../../../../utils/randomColor';
import { usePaletteDispatch } from '../../../../context/paletteContext';

interface IColorObject {
  hex: string;
}

interface IProps {
  id: number;
}

export const PaletteColor: React.FC<IProps> = ({ id }) => {
  const dispatch = usePaletteDispatch();
  const [color, setColor] = useState(randomColor());

  useEffect(() => {
    dispatch({ type: 'UPDATE_PALETTE', payload: { id, color } });
  }, [id, color, dispatch]);

  const handleChangeComplete = (color: IColorObject) => {
    setColor(color.hex);
    dispatch({ type: 'UPDATE_PALETTE', payload: { id, color: color.hex } });
  };

  return (
    <Wrapper>
      <Color color={color}>
        <ColorName color={color}>{color.toUpperCase()}</ColorName>
      </Color>
      <SliderPicker color={color} onChangeComplete={handleChangeComplete} />
    </Wrapper>
  );
};
