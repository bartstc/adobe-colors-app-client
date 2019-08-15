import React from 'react';
import {
  Panel,
  PanelTitle,
  Form,
  Label,
  Input,
  InputGroup,
  SubmitBtn
} from './PaletteForm.styles';
import { useMutation } from '@apollo/react-hooks';
import { usePaletteState } from '../../../context/paletteContext';
import { Popup } from '../../../components/Popup/Popup';
import { useAuthState } from '../../../context/authContext';
import { CREATE_PALETTE } from '../mutations';
import { useForm } from '../../../hooks/useForm';
import {
  CreatePalette,
  CreatePaletteVariables
} from '../../../schema/CreatePalette';
import { usePopup } from '../../../hooks/usePopup';

export const PaletteForm: React.FC = () => {
  const { handlePopup, show, errorMsg } = usePopup();
  const state = usePaletteState();
  const { isAuth } = useAuthState();

  const initState = {
    name: '',
    tags: ''
  };

  const { handleChange, handleSubmit, reset, values } = useForm(() => {
    if (!isAuth) {
      handlePopup('Please sign up for adding palette');
      return;
    }

    if (values.name.length < 2) {
      handlePopup('Name must be at least 2 characters');
      return;
    }

    createPalette();
  }, initState);

  const [createPalette] = useMutation<CreatePalette, CreatePaletteVariables>(
    CREATE_PALETTE,
    {
      variables: {
        name: values.name,
        tags: values.tags,
        colors: Object.values(state.colors)
      },
      update(_, __) {
        reset();
        handlePopup('Palette added successfully');
      },
      onError(err: any) {
        if (err) {
          handlePopup('Please sign up for adding palette');
        }
      }
    }
  );

  return (
    <>
      <Popup show={show} message={errorMsg} />
      <Panel>
        <PanelTitle>Create new palette</PanelTitle>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Name:</Label>
            <Input
              placeholder=""
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="tags">Tags:</Label>
            <Input
              placeholder=""
              id="tags"
              name="tags"
              value={values.tags}
              onChange={handleChange}
            />
          </InputGroup>
          <SubmitBtn type="submit">
            <i className="fas fa-cloud-download-alt" />
            <p>Save</p>
          </SubmitBtn>
        </Form>
      </Panel>
    </>
  );
};
