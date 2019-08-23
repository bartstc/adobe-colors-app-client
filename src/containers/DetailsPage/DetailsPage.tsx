import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { GetPalette, GetPaletteVariables } from '../../schema/GetPalette';
import { GET_PALETTE } from './queries';
import { usePopup } from '../../hooks/usePopup';
import { Popup } from '../../components/Popup/Popup';
import {
  IncrementViewsVariables,
  IncrementViews
} from '../../schema/IncrementViews';
import { INCREMENT_VIEWS } from './mutations';
import { Details } from './detailsPage/Details';

type TParams = { id: string };

interface IProps extends RouteComponentProps<TParams> {}

export const DetailsPage: React.FC<IProps> = ({ match }) => {
  const { handlePopup, show, errorMsg } = usePopup();
  const { id } = match.params;

  const [incrementViews] = useMutation<IncrementViews, IncrementViewsVariables>(
    INCREMENT_VIEWS,
    {
      onError(err) {
        if (err) handlePopup();
      },
      variables: {
        id
      }
    }
  );

  useEffect(() => {
    incrementViews();
  }, [incrementViews]);

  const { loading, data } = useQuery<GetPalette, GetPaletteVariables>(
    GET_PALETTE,
    {
      onError(err) {
        if (err) handlePopup();
      },
      variables: {
        id
      }
    }
  );

  return (
    <>
      <Popup show={show} message={errorMsg} />
      <Details data={data} loading={loading} handlePopup={handlePopup} />
    </>
  );
};
