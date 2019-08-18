import gql from 'graphql-tag';

export const LOGOUT_USER = gql`
  mutation LogoutUser {
    logoutUser
  }
`;
