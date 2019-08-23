import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Wrapper, Panel, PanelTitle, PanelContent } from './Library.styles';
import { Filters } from './library/Filters';
import { usePopup } from '../../hooks/usePopup';
import { Popup } from '../../components/Popup/Popup';
import { CreatedPalettes } from './library/CreatedPalettes';
import { SavedPalettes } from './library/SavedPalettes';

interface IProps extends RouteComponentProps {}

export const Library: React.FC<IProps> = () => {
  const { handlePopup, show, errorMsg } = usePopup();
  const [filter, setFilter] = useState<string>('created');

  return (
    <>
      <Popup show={show} message={errorMsg} />
      <Wrapper>
        <Panel>
          <PanelTitle>Explore your library</PanelTitle>
          <PanelContent>
            <Filters filter={filter} setFilter={setFilter} />
          </PanelContent>
        </Panel>
        {filter === 'created' && <CreatedPalettes handlePopup={handlePopup} />}
        {filter === 'saved' && <SavedPalettes handlePopup={handlePopup} />}
      </Wrapper>
    </>
  );
};
