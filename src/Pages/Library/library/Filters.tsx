import React from 'react';
import { Wrapper, FilterCreated, FilterSaved } from './Filters.styles';

interface IProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
}

export const Filters: React.FC<IProps> = ({ setFilter, filter }) => {
  const filterPalettes = (category: string) => {
    setFilter(category);
  };
  return (
    <Wrapper>
      <FilterCreated filter={filter} onClick={() => filterPalettes('created')}>
        Created
      </FilterCreated>
      <FilterSaved filter={filter} onClick={() => filterPalettes('saved')}>
        Saved
      </FilterSaved>
    </Wrapper>
  );
};
