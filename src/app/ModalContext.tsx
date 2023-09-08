'use client';

import Modal2 from './modal';
import { createContext, useReducer } from 'react';

const InitialState = { title: '', description: '', open: false };

export const Context1 = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case 'Idopen': {
      return {
        title: '아이디 오류',
        description: '아이디 형식이 맞지않습니다.',
        open: true,
      };
    }
    case 'PWopen': {
      return {
        title: '비밀번호 오류',
        description: '비밀번호 형식이 맞지않습니다',
        open: true,
      };
    }
    case 'success': {
      return {
        title: '가입성공',
        description: '회원가입에 성공했습니다',
        open: true,
      };
    }
    case 'Id_wrong': {
      return {
        title: '아이디 오류',
        description: '아이디가 일치하지않습니다',
        open: true,
      };
    }
    case 'PW_wrong': {
      return {
        title: '비밀번호 오류',
        description: '비밀번호가 일치하지않습니다',
        open: true,
      };
    }
    case 'login_success': {
      return {
        title: '로그인 성공',
        description: '로그인에 성공했습니다.',
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
          title={state.title}
          onClose={() => {
            dispatch({ type: 'close' });
          }}
        />
      </Context1.Provider>
    </>
  );
}
