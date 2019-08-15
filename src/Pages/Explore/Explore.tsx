import React, { useState, ChangeEvent, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  Wrapper,
  Panel,
  PanelTitle,
  PanelContent,
  Links,
  Filter
} from './Expolre.styles';
import { PaletteList } from './explore/PaletteList';
import { SearchForm } from './explore/SearchForm';
import { Popup } from '../../components/Popup/Popup';
import { usePopup } from '../../hooks/usePopup';
import { useLazyQuery } from '@apollo/react-hooks';
import {
  GET_ALL_PALETTES,
  GET_BEST_PALETTES,
  GET_PICKS_PALETTES,
  SEARCH_PALETTES
} from './queries';
import {
  IPalette,
  IPaletteVariables
} from '../../interfaces/Palette.interface';
import {
  SearchPalettes,
  SearchPalettesVariables
} from '../../schema/SearchPalettes';
import { usePaletteDispatch } from '../../context/paletteContext';

interface IProps extends RouteComponentProps {}

export const Explore: React.FC<IProps> = () => {
  const [query, setQuery] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');
  const [offset, setOffset] = useState<number>(0);
  const { handlePopup, show, errorMsg } = usePopup();
  const dispatch = usePaletteDispatch();

  const handleFilter = (category: string) => {
    switch (category) {
      case 'all':
        return GET_ALL_PALETTES;

      case 'best':
        return GET_BEST_PALETTES;

      case 'picks':
        return GET_PICKS_PALETTES;

      default:
        return GET_ALL_PALETTES;
    }
  };

  const [getPalettes, { data, loading, called }] = useLazyQuery<
    IPalette[],
    IPaletteVariables
  >(handleFilter(filter), {
    variables: {
      limit: 20,
      offset
    },
    onError(err: any) {
      if (err) {
        handlePopup();
      }
    }
  });

  const [
    searchPalettes,
    { called: searchCalled, loading: searchLoading, data: searchData }
  ] = useLazyQuery<SearchPalettes, SearchPalettesVariables>(SEARCH_PALETTES, {
    variables: {
      query,
      limit: 20,
      offset
    },
    onError(err: any) {
      if (err) {
        handlePopup();
      }
    }
  });

  useEffect(() => {
    getPalettes();
  }, [filter, getPalettes]);

  useEffect(() => {
    if (!loading && called) {
      dispatch({
        type: 'SET_PALETTES',
        payload: {
          data,
          loading
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [called, loading, filter, dispatch]);

  useEffect(() => {
    if (!searchLoading && searchCalled) {
      dispatch({
        type: 'SET_PALETTES',
        payload: {
          data: searchData,
          loading: searchLoading
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchLoading, searchCalled, dispatch, query]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    searchPalettes();
  };

  const filterPalettes = (category: string) => {
    setFilter(category);
  };

  return (
    <>
      <Popup show={show} message={errorMsg} />
      <Wrapper>
        <Panel>
          <PanelTitle>Search for palettes</PanelTitle>
          <PanelContent>
            <SearchForm value={query} handleChange={onChange} />
            <Links>
              <Filter onClick={() => filterPalettes('all')}>Latest</Filter>
              <Filter onClick={() => filterPalettes('best')}>Best</Filter>
              <Filter onClick={() => filterPalettes('picks')}>Picks</Filter>
            </Links>
          </PanelContent>
        </Panel>
        <PaletteList searching={searchLoading} />
      </Wrapper>
    </>
  );
};
