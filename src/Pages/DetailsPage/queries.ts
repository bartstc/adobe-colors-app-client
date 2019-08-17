import gql from 'graphql-tag';

export const GET_PALETTE = gql`
  query GetPalette($id: ID!) {
    getPalette(id: $id) {
      id
      name
      colors
      ownerusername
    }
  }
`;
