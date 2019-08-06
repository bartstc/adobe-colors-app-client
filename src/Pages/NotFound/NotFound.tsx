import React from 'react';
import { PageNotFound, Status, Message } from './NotFound.styles';

const NotFound = () => (
  <PageNotFound>
    <Status>404</Status>
    <Message>Page not found</Message>
  </PageNotFound>
);

export default NotFound;
