import React from 'react';
import { Palettes } from './PaletteList.styles';
import { Palette } from '../../../components/Palette/Palette';
import { GetAllPalettes } from '../../../schema/GetAllPalettes';
import { Spinner } from '../../../components/Spinner/Spinner';

interface IProps {
  palettes: GetAllPalettes;
}

export const PaletteList: React.FC<IProps> = ({ palettes }) => (
  <Palettes>
    {!palettes.getAllPalettes ? (
      <Spinner />
    ) : (
      palettes.getAllPalettes.map(palette => (
        <Palette key={palette.id} {...palette} />
      ))
    )}
  </Palettes>
);
