import React, { useState, ChangeEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {
  Wrapper,
  Panel,
  PanelTitle,
  PanelContent,
  Actions
} from './Expolre.styles';
import { SearchForm } from './explore/SearchForm';
import { Popup } from '../../components/Popup/Popup';
import { usePopup } from '../../hooks/usePopup';
import { AllPalettes } from './explore/AllPalettes';
import { BestPalettes } from './explore/BestPalettes';
import { PicksPalettes } from './explore/PicksPalettes';
import { Pagination } from './explore/Pagination';
import { Filters } from './explore/Filters';

interface IProps extends RouteComponentProps {}

export const Explore: React.FC<IProps> = () => {
  const limit = 20;
  const [query, setQuery] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');
  const [offset, setOffset] = useState<number>(0);
  const { handlePopup, show, errorMsg } = usePopup();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (filter !== 'all') setFilter('all');
    setQuery(e.target.value);
  };

  return (
    <>
      <Popup show={show} message={errorMsg} />
      <Wrapper>
        <Panel>
          <PanelTitle>Search for palettes</PanelTitle>
          <PanelContent>
            <SearchForm value={query} handleChange={onChange} />
            <Actions>
              <Pagination offset={offset} setOffset={setOffset} limit={limit} />
              <Filters
                setOffset={setOffset}
                setFilter={setFilter}
                filter={filter}
              />
            </Actions>
          </PanelContent>
        </Panel>
        {filter === 'all' && (
          <AllPalettes
            offset={offset}
            limit={limit}
            handlePopup={handlePopup}
            query={query}
          />
        )}
        {filter === 'best' && (
          <BestPalettes
            offset={offset}
            limit={limit}
            handlePopup={handlePopup}
          />
        )}
        {filter === 'picks' && (
          <PicksPalettes
            offset={offset}
            limit={limit}
            handlePopup={handlePopup}
          />
        )}
      </Wrapper>
    </>
  );
};
