import React from 'react';
import { PageWrapper } from './Page.styles';

interface IProps {
  children: JSX.Element;
}

const Page: React.FC<IProps> = ({ children }) => (
  <PageWrapper>{children}</PageWrapper>
);

export default Page;
