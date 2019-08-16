import styled from 'styled-components';
import { fontWeight, color } from '../../../utils/styles';

const Filter = styled.button`
  line-height: 2rem;
  font-size: 1.1rem;
  font-weight: ${fontWeight.semiBold};
  color: ${color.grey};
  background: none;
  border: none;
  padding: 0 0.8em;
  cursor: pointer;
`;

export const FilterAll = styled(Filter)`
  color: ${(props: { filter: string }) =>
    props.filter === 'all' ? color.black : color.grey};
`;

export const FilterBest = styled(Filter)`
  color: ${(props: { filter: string }) =>
    props.filter === 'best' ? color.black : color.grey};
`;

export const FilterPicks = styled(Filter)`
  color: ${(props: { filter: string }) =>
    props.filter === 'picks' ? color.black : color.grey};
`;
