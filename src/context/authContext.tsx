import React, { createContext, useReducer, useContext, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

interface IState {
  isAuth: boolean | null;
  id: string;
  username: string;
}

interface IAction {
  type: string;
  payload?: any;
}

interface IDispatchContext {
  dispatch: ({ type, payload }: IAction) => void;
}

const AuthStateContext = createContext<IState>({} as IState);
const AuthDispatchContext = createContext<IDispatchContext>(
  {} as IDispatchContext
);

const initState: IState = {
  isAuth: null,
  id: '',
  username: ''
};

const authReducer: React.Reducer<IState, IAction> = (_, { type, payload }) => {
  switch (type) {
    case 'SET_USER':
      return {
        isAuth: payload.id !== null,
        id: payload.id,
        username: payload.username
      };

    case 'LOGOUT_USER':
      return {
        isAuth: false,
        id: '',
        username: ''
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

interface ProviderProps {
  children: JSX.Element;
}

const AuthProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(
    authReducer,
    initState
  );

  useEffect(() => {
    if (localStorage.jwtToken) {
      getCurrentUser();
      const decoded: { exp: number } = jwt_decode(localStorage.jwtToken);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        dispatch({ type: 'LOGOUT_USER' });
        localStorage.removeItem('jwtToken');
        // window.location.href = '/signin';
      } else {
        getCurrentUser();
      }
    } else {
      dispatch({ type: 'LOGOUT_USER' });
    }
  }, []);

  const getCurrentUser = async () => {
    console.log('Get current user');
    // try {
    //   const { data } = await axios.get('/auth');
    //   dispatch({ type: 'SET_USER', payload: data });
    // } catch (err) {
    //   dispatch({
    //     type: 'SET_USER',
    //     payload: {
    //       id: null,
    //       username: null
    //     }
    //   });
    // }
  };

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={{ dispatch }}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const state = useContext<IState>(AuthStateContext);
  return state;
};

const useAuthDispatch = () => {
  const { dispatch } = useContext(AuthDispatchContext);
  return dispatch;
};

export { AuthProvider, useAuthState, useAuthDispatch };

// for run with docker: change proxy in package.json: "proxy": "http://192.168.99.100:5000/",
