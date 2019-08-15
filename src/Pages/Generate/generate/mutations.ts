import gql from 'graphql-tag';

export const CREATE_PALETTE = gql`
  mutation CreatePalette($name: String!, $colors: [String!]!, $tags: String) {
    createPalette(input: { name: $name, colors: $colors, tags: $tags })
  }
`;
