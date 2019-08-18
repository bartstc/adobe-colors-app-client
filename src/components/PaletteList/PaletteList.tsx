import React from 'react';
import { ApolloQueryResult } from 'apollo-client';

import { Palettes, Warning } from './PaletteList.styles';
import { Palette } from '../Palette/Palette';
import { Spinner } from '../Spinner/Spinner';
import { IPalette } from '../../interfaces/Palette.interface';
import { usePopup } from '../../hooks/usePopup';
import { Popup } from '../Popup/Popup';

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
  const { handlePopup, show, errorMsg } = usePopup();

  if (loading) return <Spinner />;

  return (
    <>
      <Popup show={show} message={errorMsg} />
      <Palettes>
        {palettes.length === 0 ? (
          <Warning>No results.</Warning>
        ) : (
          palettes.map((palette: IPalette) => (
            <Palette
              key={palette.id}
              {...palette}
              refetch={refetch}
              handlePopup={handlePopup}
            />
          ))
        )}
      </Palettes>
    </>
  );
};
