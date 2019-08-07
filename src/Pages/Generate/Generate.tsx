import React from 'react';
import { RouteComponentProps } from 'react-router';
import {
  Wrapper,
  Panel,
  PaletteList,
  PanelTitle,
  Form,
  InputGroup,
  Label,
  Input,
  SubmitBtn
} from './Generate.styles';
import { PaletteColor } from './generate/PaletteColor';

interface IProps extends RouteComponentProps {}

export const Generate: React.FC<IProps> = () => (
  <Wrapper>
    <Panel>
      <PanelTitle>Create new palette</PanelTitle>
      <Form>
        <InputGroup>
          <Label htmlFor="name">Name:</Label>
          <Input placeholder="" id="name" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="tags">Tags:</Label>
          <Input placeholder="" id="tags" />
        </InputGroup>
        <SubmitBtn type="submit">
          <i className="fas fa-cloud-download-alt" />
          <p>Save</p>
        </SubmitBtn>
      </Form>
    </Panel>
    <PaletteList>
      <PaletteColor />
      <PaletteColor />
      <PaletteColor />
      <PaletteColor />
      <PaletteColor />
    </PaletteList>
  </Wrapper>
);
