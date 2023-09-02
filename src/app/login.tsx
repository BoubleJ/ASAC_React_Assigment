import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useRef } from 'react';
import { Mail } from '@mui/icons-material';
import ModalProvider, { ModalContext } from './modal';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const { show, hide } = useContext(ModalContext);
  const router = useRouter();
  const [modaldescription, setmodaldescription] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      console.log(email);
      alert('이메일 형식이 올바르지 않습니다.');

      emailInputRef.current.focus();
      setmodaldescription('이메일 형식이 올바르지 않습니다.');
    } else if (!isValidPassword(password)) {
      console.log(password);
      alert('비밀번호 형식이 올바르지 않습니다.');
      passwordInputRef.current.focus();
      setmodaldescription('비밀번호 형식이 올바르지 않습니다.');
    } else {
      // 회원 가입 성공
      console.log('success');
    }
  };

  const isValidEmail = (email: string): boolean => {
    // 이메일 유효성 검사
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password: string): boolean => {
    // 패스워드 유효성 검사
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={e => {
              handleSubmit(e);
            }}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={emailInputRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputRef={passwordInputRef}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                setEmail(emailInputRef.current.value);
                setPassword(passwordInputRef.current.value);

                // 클릭시 모달창 생성
                // 왜냐 NestedReactComponent가 부모 컴포넌트인 ModalContext.Provider로 부터
                // show, hide 함수를 받았는데 show함수 프로퍼티 중 하나인 show는 true니까
                // 밑의 설정은 켜기버튼 A,B,C,D 모두 동일하게 적용할 수 있다. show 함수 파라미터조작하면 된다.
                show({
                  // 클릭시 show 함수를 실행한다 -> show : true를 실행한다.
                  //modal-provider 파일 내부의 ModalContext.Provider value에 담겨진 show의 파라미터인 setmodal을 가져온다.
                  title: '경고',
                  //모달창 제목
                  description: '후 왜 안뜨냐',
                  //모달창 내용

                  confirmButton: '확인',
                  //모달창 확인버튼
                  //cancelButton, confirmButton 값이 undefined거나 null값이면
                  // modal-provider에 적혀있는 기본 이름으로 버튼값이정해진다
                  // {modal.confirmButton ?? '확인'} 이거 말하는거
                  cancelButton: '취소',
                  //모달창 취소버튼

                  confirmCallback: () => {
                    router.push('/');
                    // 아직 이동할 지정 페이지가 없으니 '/' 로 설정한 것
                  },
                  useCancelButton: true,
                  useConfirmButton: true,
                  // 취소버튼 사용 유무 결정
                  // useConfirmButton 이것도 똑같이 사용 가능 (사용유무 결정 가능)
                });
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
