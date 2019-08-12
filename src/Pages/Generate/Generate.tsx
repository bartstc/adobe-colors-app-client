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
import { usePaletteState } from '../../context/paletteContext';

interface IProps extends RouteComponentProps {}

export const Generate: React.FC<IProps> = () => {
  const state = usePaletteState();

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <Wrapper>
      <Panel>
        <PanelTitle>Create new palette</PanelTitle>
        <Form onSubmit={onSubmit}>
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
        <PaletteColor id={1} />
        <PaletteColor id={2} />
        <PaletteColor id={3} />
        <PaletteColor id={4} />
        <PaletteColor id={5} />
      </PaletteList>
    </Wrapper>
  );
};
