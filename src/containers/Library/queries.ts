import gql from 'graphql-tag';

export const GET_USER_PALETTES = gql`
  query GetUserPalettes {
    getUserPalettes {
      id
      name
      colors
      tags
      ownerusername
      ownerid
      saves
      views
    }
  }
`;

export const GET_SAVED_PALETTES = gql`
  query GetSavedPalettes {
    getSavedPalettes {
      id
      name
      colors
      tags
      ownerusername
      ownerid
      saves
      views
    }
  }
`;
