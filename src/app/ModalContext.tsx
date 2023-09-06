'use client';

import Modal2 from '@/app/modal';
import { createContext, useReducer } from 'react';

const InitialState = { text: '', open: false };

export const Context1 = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case 'open': {
      return {
        text: '입력 오류',
        open: true,
      };
    }
    case 'close':
      return InitialState;
  }
}

export default function ModalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <>
      <Context1.Provider value={{ state, dispatch }}>
        {children}
        <Modal2
          open={state.open}
          text={state.text}
          onClose={() => {
            dispatch({ type: 'close' });
          }}
        />
      </Context1.Provider>
    </>
  );
}
