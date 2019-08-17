import styled from 'styled-components';
import { fontWeight, color, device } from '../../../utils/styles';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5em;
  width: 200px;

  @media ${device.tablet} {
    margin-top: 0;
    padding-left: 0.8em;
    margin-left: 1.2em;
    border-left: 1px solid ${color.grey};
  }
`;

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

export const FilterCreated = styled(Filter)`
  color: ${(props: { filter: string }) =>
    props.filter === 'created' ? color.black : color.grey};
`;

export const FilterSaved = styled(Filter)`
  color: ${(props: { filter: string }) =>
    props.filter === 'saved' ? color.black : color.grey};
`;
