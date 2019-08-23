import gql from 'graphql-tag';

export const GET_PICKS_PALETTES = gql`
  query GetPicksPalettes($limit: Int!, $offset: Int!) {
    getPicksPalettes(limit: $limit, offset: $offset) {
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

export const GET_BEST_PALETTES = gql`
  query GetBestPalettes($limit: Int!, $offset: Int!) {
    getBestPalettes(limit: $limit, offset: $offset) {
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

export const SEARCH_PALETTES = gql`
  query SearchPalettes($query: String!, $limit: Int!, $offset: Int!) {
    searchPalettes(query: $query, limit: $limit, offset: $offset) {
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
