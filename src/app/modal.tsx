import { createContext } from 'vm';
import Modal_Style from './modal.module.css';
import { useState } from 'react';

export const ModalContext = createContext({
  show: () => {
    console.log('NULL(show)');
  },
  hide: () => {
    console.log('NULL(show)');
  },
});

interface ModalProviderProps {
  children: React.ReactNode;
}

//default value는 어디서든 볼 수 있따
//이니셜 value는 컴포넌트 내부에서만 볼 수 있다.

export default function ModalProvider({ children }: ModalProviderProps) {
  const [show, setShow] = useState<boolean>(false);
  return (
    // initial value
    <ModalContext.Provider
      value={{
        show: () => {
          setShow(true);
        },
        hide: () => {
          setShow(false);
        },
      }}
    >
      {children}
      <Modal
        open={open}
        onClose={() => setShow(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </ModalContext.Provider>
  );
}
