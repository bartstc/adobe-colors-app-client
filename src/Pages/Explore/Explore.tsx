import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  Wrapper,
  Panel,
  PanelTitle,
  Palettes,
  PanelContent,
  Form,
  Label,
  Input,
  SubmitBtn,
  Links,
  Filter
} from './Expolre.styles';
import { Palette } from '../../components/Palette/Palette';

interface IProps extends RouteComponentProps {}

export const Explore: React.FC<IProps> = () => {
  return (
    <Wrapper>
      <Panel>
        <PanelTitle>Search for palettes</PanelTitle>
        <PanelContent>
          <Form>
            <Label htmlFor="query">Filter:</Label>
            <Input placeholder="" id="query" />
            <SubmitBtn type="submit">
              <i className="fas fa-search" />
            </SubmitBtn>
          </Form>
          <Links>
            <Filter>Latest</Filter>
            <Filter>Best</Filter>
            <Filter>Picks</Filter>
          </Links>
        </PanelContent>
      </Panel>
      <Palettes>
        <Palette />
        <Palette />
        <Palette />
        <Palette />
        <Palette />
        <Palette />
        <Palette />
        <Palette />
      </Palettes>
    </Wrapper>
  );
};
