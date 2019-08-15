import React, { createContext, useReducer, useContext } from 'react';
import { IPalette } from '../interfaces/Palette.interface';

interface IState {
  colors: {
    [key: number]: string;
  };
  palettes: IPalette[];
  loading: boolean;
}

interface IAction {
  type: string;
  payload?: any;
}

interface IDispatchContext {
  dispatch: ({ type, payload }: IAction) => void;
}

const PaletteStateContext = createContext<IState>({} as IState);
const PaletteDispatchContext = createContext<IDispatchContext>(
  {} as IDispatchContext
);

const initState: IState = {
  colors: {},
  palettes: [],
  loading: true
};

const paletteReducer: React.Reducer<IState, IAction> = (
  state,
  { type, payload }
) => {
  switch (type) {
    case 'UPDATE_PALETTE':
      const updatedPalette = { ...state.colors };
      updatedPalette[payload.id] = payload.color;

      return {
        ...state,
        colors: updatedPalette
      };

    case 'SET_PALETTES':
      const { data, loading } = payload;
      let palettes;
      if (!data) palettes = [];

      // The data can be three diffrent arrays of palettes depending on the query
      if (data && data.getAllPalettes) palettes = data.getAllPalettes;
      if (data && data.getBestPalettes) palettes = data.getBestPalettes;
      if (data && data.getPicksPalettes) palettes = data.getPicksPalettes;
      if (data && data.searchPalettes) palettes = data.searchPalettes;

      return {
        ...state,
        palettes,
        loading
      };

    case 'LOADING':
      return {
        ...state,
        loading: true
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

interface ProviderProps {
  children: JSX.Element;
}

const PaletteProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(
    paletteReducer,
    initState
  );

  return (
    <PaletteStateContext.Provider value={state}>
      <PaletteDispatchContext.Provider value={{ dispatch }}>
        {children}
      </PaletteDispatchContext.Provider>
    </PaletteStateContext.Provider>
  );
};

const usePaletteState = () => {
  const state = useContext(PaletteStateContext);
  return state;
};

const usePaletteDispatch = () => {
  const { dispatch } = useContext(PaletteDispatchContext);
  return dispatch;
};

export { PaletteProvider, usePaletteState, usePaletteDispatch };
