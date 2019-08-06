import styled from 'styled-components';

export const PageWrapper = styled.div`
  height: 100%;
  position: fixed;
  top: 0;
  transition: opacity 0.35s ease-in-out;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;
