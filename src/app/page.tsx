'use client';
import Image from 'next/image';
import SignUp from './SignUp';
import Modal2 from './Modal';
import ModalProvider from './ModalContext';

export default function Home() {
  return (
    <div>
      
        <SignUp/>
        <Modal2/>
    
    </div>
  );
}
