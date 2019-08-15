import React, { useState, ChangeEvent } from 'react';
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
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_PALETTES } from './queries';
import { Popup } from '../../components/Popup/Popup';
import { Spinner } from '../../components/Spinner/Spinner';
import {
  GetAllPalettes,
  GetAllPalettesVariables
} from '../../schema/GetAllPalettes';

interface IProps extends RouteComponentProps {}

export const Explore: React.FC<IProps> = () => {
  const [query, setQuery] = useState('');
  const [offset, setOffset] = useState(0);
  const [show, setShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { loading, data } = useQuery<GetAllPalettes, GetAllPalettesVariables>(
    GET_ALL_PALETTES,
    {
      variables: {
        limit: 20,
        offset
      },
      onError(err: any) {
        if (err) {
          handlePopup('Something goes wrong. Please refresh');
        }
      }
    }
  );

  const handlePopup = (message: string) => {
    setShow(true);
    setErrorMsg(message);
    setTimeout(() => {
      setShow(false);
      setErrorMsg('');
    }, 4000);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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
            <Links>
              <Filter>Latest</Filter>
              <Filter>Best</Filter>
              <Filter>Picks</Filter>
            </Links>
          </PanelContent>
        </Panel>
        {loading || !data ? <Spinner /> : <PaletteList palettes={data} />}
      </Wrapper>
    </>
  );
};
