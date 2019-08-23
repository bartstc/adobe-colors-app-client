import React from 'react';
import { FilterAll, FilterBest, FilterPicks } from './Filters.styles';

interface IProps {
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
}

export const Filters: React.FC<IProps> = ({ setOffset, setFilter, filter }) => {
  const filterPalettes = (category: string) => {
    setOffset(0);
    setFilter(category);
  };
  return (
    <>
      <FilterAll filter={filter} onClick={() => filterPalettes('all')}>
        Latest
      </FilterAll>
      <FilterBest filter={filter} onClick={() => filterPalettes('best')}>
        Best
      </FilterBest>
      <FilterPicks filter={filter} onClick={() => filterPalettes('picks')}>
        Picks
      </FilterPicks>
    </>
  );
};
