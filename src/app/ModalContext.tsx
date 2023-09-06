'use client';

import { createContext, useReducer } from 'react';
import Modal2 from './Modal';
import { initialize } from 'next/dist/server/lib/render-server';

const InitialState = { text: '' };

export const Context1 = createContext({
  state: InitialState,
  dispatch: value => {},
});

function reducer(state, action) {
  switch (action.type) {
    case 'open': {
      return {
        text: '입력 오류',
      };
    }
    case 'close':
      return;
      InitialState;
  }
}

export default function ModalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <>
      <Context1.Provider value={{ state, dispatch }}>
        {children}
      </Context1.Provider>
    </>
  );
}
