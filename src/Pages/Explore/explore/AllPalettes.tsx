import React, { useEffect } from 'react';
import { PaletteList } from '../../../components/PaletteList/PaletteList';
import { useQuery } from '@apollo/react-hooks';
import { SEARCH_PALETTES } from '../queries';
import { Spinner } from '../../../components/Spinner/Spinner';
import { usePaletteDispatch } from '../../../context/paletteContext';
import {
  SearchPalettes,
  SearchPalettesVariables
} from '../../../schema/SearchPalettes';

interface IProps {
  offset: number;
  limit: number;
  query: string;
  handlePopup: () => void;
}

export const AllPalettes: React.FC<IProps> = ({
  offset,
  limit,
  query,
  handlePopup
}) => {
  const dispatch = usePaletteDispatch();

  const { loading, data, refetch } = useQuery<
    SearchPalettes,
    SearchPalettesVariables
  >(SEARCH_PALETTES, {
    onError(err) {
      if (err) handlePopup();
    },
    variables: {
      offset,
      limit,
      query
    },
    onCompleted() {
      if (data && !loading) {
        dispatch({
          type: 'SET_PALETTES',
          payload: {
            palettes: data.searchPalettes
          }
        });
      }
    }
  });

  useEffect(() => {
    if (refetch) refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, query]);

  if (!data || !data.searchPalettes || loading) return <Spinner />;

  return (
    <PaletteList
      loading={loading}
      palettes={data.searchPalettes}
      refetch={refetch}
    />
  );
};
