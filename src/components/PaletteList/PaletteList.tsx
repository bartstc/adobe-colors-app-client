import React from 'react';
import { ApolloQueryResult } from 'apollo-client';

import { Palettes, Warning } from './PaletteList.styles';
import { Palette } from '../Palette/Palette';
import { Spinner } from '../Spinner/Spinner';
import { IPalette } from '../../interfaces/Palette.interface';

interface IProps {
  loading: boolean;
  palettes: IPalette[];
  refetch: () => Promise<ApolloQueryResult<any>>;
}

export const PaletteList: React.FC<IProps> = ({
  loading,
  palettes,
  refetch
}) => {
  if (loading) return <Spinner />;

  return (
    <Palettes>
      {palettes.length === 0 ? (
        <Warning>No results.</Warning>
      ) : (
        palettes.map((palette: IPalette) => (
          <Palette key={palette.id} {...palette} refetch={refetch} />
        ))
      )}
    </Palettes>
  );
};
