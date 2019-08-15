import React from 'react';
import { PaletteColor } from './palette/PaletteColor';
import { PaletteList } from './Palette.styles';

export const Palette: React.FC = () => (
  <PaletteList>
    <PaletteColor id={1} />
    <PaletteColor id={2} />
    <PaletteColor id={3} />
    <PaletteColor id={4} />
    <PaletteColor id={5} />
  </PaletteList>
);
