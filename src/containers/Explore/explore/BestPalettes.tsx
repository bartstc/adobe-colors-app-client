import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { PaletteList } from '../../../components/PaletteList/PaletteList';
import { GET_BEST_PALETTES } from '../queries';
import {
  GetBestPalettes,
  GetBestPalettesVariables
} from '../../../schema/GetBestPalettes';
import { Spinner } from '../../../components/Spinner/Spinner';
import { usePaletteDispatch } from '../../../context/paletteContext';

interface IProps {
  offset: number;
  limit: number;
  handlePopup: () => void;
}

export const BestPalettes: React.FC<IProps> = ({
  limit,
  offset,
  handlePopup
}) => {
  const dispatch = usePaletteDispatch();

  const { loading, data, refetch } = useQuery<
    GetBestPalettes,
    GetBestPalettesVariables
  >(GET_BEST_PALETTES, {
    onError(err) {
      if (err) handlePopup();
    },
    variables: {
      offset,
      limit
    },
    onCompleted() {
      if (data && !loading) {
        dispatch({
          type: 'SET_PALETTES',
          payload: {
            palettes: data.getBestPalettes
          }
        });
      }
    }
  });

  useEffect(() => {
    if (refetch) refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  if (!data || !data.getBestPalettes || loading) return <Spinner />;

  return (
    <PaletteList
      loading={loading}
      palettes={data.getBestPalettes}
      refetch={refetch}
    />
  );
};
