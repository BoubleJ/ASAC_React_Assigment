'use client';
import Image from 'next/image';
import SignUp from './login';
import { Stack, Button } from '@mui/material';
import AbcIcon from '@mui/icons-material/Abc';
import DeleteIcon from '@mui/icons-material/Delete';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useContext, useState } from 'react';
import ModalProvider, { ModalContext } from './modal';

const NestedReactComponent = () => {
  const { show, hide } = useContext(ModalContext);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            show();
          }}
        >
          켜기provider로 감싼
        </button>
        <button
          onClick={() => {
            hide();
          }}
        >
          끄기provider로 감싼
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const { show, hide } = useContext(ModalContext);

  return (
    <div>
      <SignUp></SignUp>
      <ModalProvider></ModalProvider>
      <div>
        <button
          onClick={() => {
            show();
          }}
        >
          켜기
        </button>
        <button
          onClick={() => {
            hide();
          }}
        >
          끄기
        </button>
      </div>
      <ModalProvider>
        <NestedReactComponent />
      </ModalProvider>
    </div>
  );
}
