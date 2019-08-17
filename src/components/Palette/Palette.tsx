import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ApolloQueryResult } from 'apollo-client';

import { IPalette } from '../../interfaces/Palette.interface';
import { useAuthState } from '../../context/authContext';
import PaletteDetails from './palette/PaletteDetails';
import {
  SAVE_PALETTE,
  REMOVE_PALETTE,
  REMOVE_SAVED_PALETTE,
  INCREMENT_SAVES
} from './mutations';
import { usePopup } from '../../hooks/usePopup';
import { Popup } from '../Popup/Popup';
import {
  RemovePalette,
  RemovePaletteVariables
} from '../../schema/RemovePalette';
import {
  RemoveSavedPalette,
  RemoveSavedPaletteVariables
} from '../../schema/RemoveSavedPalette';
import { SavePalette, SavePaletteVariables } from '../../schema/SavePalette';
import {
  IncrementSaves,
  IncrementSavesVariables
} from '../../schema/IncrementSaves';

interface IProps extends IPalette {
  refetch: () => Promise<ApolloQueryResult<any>>;
}

export const Palette: React.FC<IProps> = props => {
  const { id: userId, isAuth } = useAuthState();
  const { handlePopup, show, errorMsg } = usePopup();
  const { refetch, id } = props;

  const [incrementSaves] = useMutation<IncrementSaves, IncrementSavesVariables>(
    INCREMENT_SAVES,
    {
      onError(err) {
        if (err) handlePopup('Palette not found');
      },
      variables: {
        id
      },
      update(_, __) {
        if (refetch) refetch();
      }
    }
  );

  const [savePalette] = useMutation<SavePalette, SavePaletteVariables>(
    SAVE_PALETTE,
    {
      onError(err) {
        if (err) handlePopup('Palette is already saved');
      },
      variables: {
        id
      },
      update(_, __) {
        incrementSaves();
        handlePopup('Palette saved successfully');
        if (refetch) refetch();
      }
    }
  );

  const [removeSavedPalette] = useMutation<
    RemoveSavedPalette,
    RemoveSavedPaletteVariables
  >(REMOVE_SAVED_PALETTE, {
    onError(err) {
      if (err) handlePopup('Palette not found');
    },
    variables: {
      id
    },
    update(_, __) {
      handlePopup('Palette removed from saved palettes');
      if (refetch) refetch();
    }
  });

  const [removePalette] = useMutation<RemovePalette, RemovePaletteVariables>(
    REMOVE_PALETTE,
    {
      onError(err) {
        if (err) handlePopup();
      },
      variables: {
        id
      },
      update(_, __) {
        handlePopup('Palette removed successfully');
        if (refetch) refetch();
      }
    }
  );

  return (
    <>
      <Popup show={show} message={errorMsg} />
      <PaletteDetails
        {...props}
        isAuth={isAuth}
        userId={userId}
        savePalette={savePalette}
        removePalette={removePalette}
        removeSavedPalette={removeSavedPalette}
      />
    </>
  );
};
