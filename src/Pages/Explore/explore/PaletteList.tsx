import React from 'react';
import { Palettes, Warning } from './PaletteList.styles';
import { Palette } from '../../../components/Palette/Palette';
import { Spinner } from '../../../components/Spinner/Spinner';
import { IPalette } from '../../../interfaces/Palette.interface';
import { usePaletteState } from '../../../context/paletteContext';

interface IProps {
  searching: boolean;
}

export const PaletteList: React.FC<IProps> = ({ searching }) => {
  const { palettes, loading } = usePaletteState();

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
