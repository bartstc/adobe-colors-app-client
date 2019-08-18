import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { PaletteList } from '../../../components/PaletteList/PaletteList';
import { GET_USER_PALETTES } from '../queries';
import { GetUserPalettes } from '../../../schema/GetUserPalettes';
import { Spinner } from '../../../components/Spinner/Spinner';

interface IProps {
  handlePopup: () => void;
}

export const CreatedPalettes: React.FC<IProps> = ({ handlePopup }) => {
  const { loading, data, refetch } = useQuery<GetUserPalettes>(
    GET_USER_PALETTES,
    {
      onError(err) {
        if (err) handlePopup();
      }
    }
  );

  useEffect(() => {
    if (refetch) refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data || !data.getUserPalettes || loading) return <Spinner />;

  return (
    <PaletteList
      loading={loading}
      palettes={data.getUserPalettes}
      refetch={refetch}
    />
  );
};
