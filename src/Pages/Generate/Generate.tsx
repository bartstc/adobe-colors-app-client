import React from 'react';
import { RouteComponentProps } from 'react-router';

import { Wrapper } from './Generate.styles';
import { Palette } from './generate/Palette';
import { PaletteForm } from './generate/PaletteForm';

interface IProps extends RouteComponentProps {}

export const Generate: React.FC<IProps> = () => {
  return (
    <Wrapper>
      <PaletteForm />
      <Palette />
    </Wrapper>
  );
};
