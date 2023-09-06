import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState, useRef, createContext, useContext, Children } from 'react';
import SignUp from './SignUp';
import Context1 from './ModalContext';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Modal2(props) {
  const [state, dispatch] = useContext(Context1);

  return (
    <>
      <div>
        <Modal
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {state.text}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <h5>입력에 오류가 있습니다.</h5>
            </Typography>
            <Button onClick={props.onClose}>확인</Button>
            <Button onClick={props.onClose}>취소</Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}
