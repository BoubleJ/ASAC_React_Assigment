'use client';
import Image from 'next/image';
import SignUp from './login';
import { Stack, Button } from '@mui/material';
import AbcIcon from '@mui/icons-material/Abc';
import DeleteIcon from '@mui/icons-material/Delete';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useContext, useState, createContext } from 'react';
import Detail from './modal';

import ModalProvider, { ModalContext } from './modal';

import { useRouter } from 'next/navigation';

export default function Home() {
  const { show, hide } = useContext(ModalContext);
  const router = useRouter();

  return (
    <div>
      <ModalProvider>
        <SignUp></SignUp>
      </ModalProvider>
    </div>
  );
}
