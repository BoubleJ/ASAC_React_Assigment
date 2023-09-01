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

export let Context1 = createContext();

export default function Home() {
  let [재고, 재고변경] = useState([10, 11, 12]);
  return (
    <div>
      <Context1.Provider value={{ 재고 }}>
        <Detail></Detail>
      </Context1.Provider>

      <SignUp></SignUp>
    </div>
  );
}
