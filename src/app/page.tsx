'use client';
import Image from 'next/image';
import SignUp from './login';
import { Stack, Button } from '@mui/material';
import AbcIcon from '@mui/icons-material/Abc';
import DeleteIcon from '@mui/icons-material/Delete';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

export default function Home() {
  return (
    <div>
      <SignUp></SignUp>
    </div>
  );
}
