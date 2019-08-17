import React from 'react';
import { ExecutionResult } from 'react-apollo';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import {
  Wrapper,
  PaletteHeader,
  PaletteTitle,
  PaletteInfo,
  Info,
  InfoText,
  Colors,
  Color,
  ActionPanel,
  ActionBtn,
  ActionLink
} from './PaletteDetails.styles';
import { IPalette } from '../../../interfaces/Palette.interface';

interface IProps extends IPalette, RouteComponentProps {
  isAuth: boolean | null;
  userId: string;
  savePalette: () => Promise<void | ExecutionResult<any>>;
  removePalette: () => Promise<void | ExecutionResult<any>>;
  removeSavedPalette: () => Promise<void | ExecutionResult<any>>;
}

const PaletteDetails: React.FC<IProps> = ({
  id,
  name,
  colors,
  saves,
  views,
  ownerid,
  isAuth,
  userId,
  savePalette,
  removePalette,
  removeSavedPalette,
  location: { pathname }
}) => (
  <Wrapper>
    <PaletteHeader>
      <PaletteTitle>{name}</PaletteTitle>
      <PaletteInfo>
        <Info>
          <i className="fas fa-cloud-download-alt" />
          <InfoText>{saves}</InfoText>
        </Info>
        <Info>
          <i className="fas fa-eye" />
          <InfoText>{views}</InfoText>
        </Info>
      </PaletteInfo>
    </PaletteHeader>
    <Colors>
      <ActionPanel>
        <ActionLink to={`/palette/${id}`}>
          <i className="fas fa-eye" />
          View
        </ActionLink>
        {isAuth && userId !== ownerid && pathname !== '/library' && (
          <ActionBtn onClick={savePalette}>
            <i className="fas fa-cloud-download-alt" />
            Save
          </ActionBtn>
        )}
        {isAuth && userId !== ownerid && pathname === '/library' && (
          <ActionBtn onClick={removeSavedPalette}>
            <i className="fas fa-trash-alt" />
            Remove
          </ActionBtn>
        )}
        {isAuth && userId === ownerid && (
          <ActionBtn onClick={removePalette}>
            <i className="fas fa-trash-alt" />
            Delete
          </ActionBtn>
        )}
      </ActionPanel>
      {colors.map((color, id) => (
        <Color key={id} color={color} />
      ))}
    </Colors>
  </Wrapper>
);

export default withRouter(PaletteDetails);
