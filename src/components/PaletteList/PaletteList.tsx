import React from 'react';
import { Palettes, Warning } from './PaletteList.styles';
import { Palette } from '../Palette/Palette';
import { Spinner } from '../Spinner/Spinner';
import { IPalette } from '../../interfaces/Palette.interface';

interface IProps {
  loading: boolean;
  palettes: IPalette[];
}

export const PaletteList: React.FC<IProps> = ({ loading, palettes }) => {
  if (loading) return <Spinner />;

  return (
    <Palettes>
      {palettes.length === 0 ? (
        <Warning>No results.</Warning>
      ) : (
        palettes.map((palette: IPalette) => (
          <Palette key={palette.id} {...palette} />
        ))
      )}
    </Palettes>
  );
};
