import React, { useEffect } from 'react';
import { PaletteList } from '../../../components/PaletteList/PaletteList';
import { useQuery } from '@apollo/react-hooks';
import { GET_PICKS_PALETTES } from '../queries';
import {
  GetPicksPalettes,
  GetPicksPalettesVariables
} from '../../../schema/GetPicksPalettes';
import { Spinner } from '../../../components/Spinner/Spinner';
import { usePaletteDispatch } from '../../../context/paletteContext';

interface IProps {
  offset: number;
  limit: number;
  handlePopup: () => void;
}

export const PicksPalettes: React.FC<IProps> = ({
  limit,
  offset,
  handlePopup
}) => {
  const dispatch = usePaletteDispatch();

  const { loading, data, refetch } = useQuery<
    GetPicksPalettes,
    GetPicksPalettesVariables
  >(GET_PICKS_PALETTES, {
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
            palettes: data.getPicksPalettes
          }
        });
      }
    }
  });

  useEffect(() => {
    if (refetch) refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  if (!data || !data.getPicksPalettes || loading) return <Spinner />;

  return (
    <PaletteList
      loading={loading}
      palettes={data.getPicksPalettes}
      refetch={refetch}
    />
  );
};
