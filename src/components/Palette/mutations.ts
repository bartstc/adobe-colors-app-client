import gql from 'graphql-tag';

export const SAVE_PALETTE = gql`
  mutation SavePalette($id: ID!) {
    savePalette(id: $id)
  }
`;

export const REMOVE_SAVED_PALETTE = gql`
  mutation RemoveSavedPalette($id: ID!) {
    removeSavedPalette(id: $id)
  }
`;

export const REMOVE_PALETTE = gql`
  mutation RemovePalette($id: ID!) {
    removePalette(id: $id)
  }
`;

export const INCREMENT_SAVES = gql`
  mutation IncrementSaves($id: ID!) {
    incrementSaves(id: $id)
  }
`;
