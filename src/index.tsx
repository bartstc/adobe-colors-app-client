import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AuthApp } from './AuthApp';
import { GlobalStyle } from './utils/styles';

const Index: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AuthApp />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
