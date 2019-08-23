import gql from 'graphql-tag';

export const INCREMENT_VIEWS = gql`
  mutation IncrementViews($id: ID!) {
    incrementViews(id: $id)
  }
`;
