import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { PaletteList } from '../../../components/PaletteList/PaletteList';
import { GET_SAVED_PALETTES } from '../queries';
import { Spinner } from '../../../components/Spinner/Spinner';
import { GetSavedPalettes } from '../../../schema/GetSavedPalettes';
import { IPalette } from '../../../interfaces/Palette.interface';

interface IProps {
  handlePopup: () => void;
}

export const SavedPalettes: React.FC<IProps> = ({ handlePopup }) => {
  const { loading, data, refetch } = useQuery<GetSavedPalettes>(
    GET_SAVED_PALETTES,
    {
      onError(err) {
        if (err) handlePopup();
      }
    }
  );

  if (!data || !data.getSavedPalettes || loading) return <Spinner />;

  return (
    <PaletteList
      loading={loading}
      palettes={data.getSavedPalettes as IPalette[]}
      refetch={refetch}
    />
  );
};
