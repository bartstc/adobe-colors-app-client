import styled from 'styled-components';
import { color } from '../../../utils/styles';

export const PageBtn = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  width: 35px;
  height: 35px;
  cursor: pointer;
  color: ${(props: { active: boolean }) =>
    props.active ? color.black : color.grey};

  &:disabled {
    cursor: auto;
  }
`;
