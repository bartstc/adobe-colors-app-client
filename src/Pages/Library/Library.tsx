import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  Wrapper,
  Panel,
  ListWrapper,
  PanelTitle,
  ListTitle,
  Palettes,
  PanelContent,
  Links,
  Filter
} from './Library.styles';
import { Palette } from '../../components/Palette/Palette';

interface IProps extends RouteComponentProps {}

export const Library: React.FC<IProps> = () => {
  return (
    <Wrapper>
      <Panel>
        <PanelTitle>Explore your library</PanelTitle>
        <PanelContent>
          <Links>
            <Filter>Created</Filter>
            <Filter>Saved</Filter>
          </Links>
        </PanelContent>
      </Panel>
      {/* <Warning>N palettes added yet.</Warning> */}
      <ListWrapper>
        <ListTitle>Created</ListTitle>
        <Palettes>
          {/* <Palette />
          <Palette />
          <Palette />
          <Palette />
          <Palette />
          <Palette />
          <Palette />
          <Palette /> */}
        </Palettes>
      </ListWrapper>
    </Wrapper>
  );
};
