import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { Context1 } from '@/app/ModalContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  const { state, dispatch } = useContext(Context1);

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
              {state.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <h5>{state.description}</h5>
            </Typography>

            <Button
              onClick={() => {
                if (state.title !== '가입성공') {
                  props.onClose();
                } else if (state.title === '가입성공') {
                  props.onClose();
                  router.push('/login');
                }
              }}
            >
              확인
            </Button>

            <Button
              onClick={() => {
                props.onClose();
              }}
            >
              취소
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}
