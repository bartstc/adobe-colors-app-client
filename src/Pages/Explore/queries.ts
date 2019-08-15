import gql from 'graphql-tag';

export const GET_ALL_PALETTES = gql`
  query GetAllPalettes($limit: Int!, $offset: Int!) {
    getAllPalettes(limit: $limit, offset: $offset) {
      id
      name
      colors
      tags
      ownerusername
      saves
      views
    }
  }
`;
