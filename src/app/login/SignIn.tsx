'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
import { ThemeProvider } from '@mui/material/styles';
import Links from 'next/link';
import { useContext } from 'react';
import { Context1 } from '@/app/ModalContext';
import { defaultTheme, Copyright } from './page';

export function SignIn() {
  const { state, dispatch } = useContext(Context1);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = React.useCallback(e => {
    setId(e.target.value);
  });

  const onChangePW = React.useCallback(e => {
    setPassword(e.target.value);
  });

  const handleLogin = () => {
    if (id != 'helloworld@naver.com') {
      dispatch({ type: 'Id_wrong' });
      console.log(id);
    } else if (password != 'Qwer!234') {
      dispatch({ type: 'PW_wrong' });
    }
  };

  const onSubmit = data => {
    if (data.email === 'helloworld@naver.com' && data.password === 'Qwer!234') {
      console.log('success');
      dispatch({ type: 'login_success' });
    }
  };
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();

  return (
    <ThemeProvider theme={defaultTheme}>
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              value={id}
              autoComplete="email"
              onChange={onChangeId}
              autoFocus
              aria-invalid={
                isSubmitted ? (errors.email ? 'true' : 'false') : undefined
              }
              {...register('email', {
                required: '이메일은 필수 입력입니다.',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '이메일 형식에 맞지 않습니다.',
                },
              })}
            />
            {errors.email && <small role="alert">{errors.email.message}</small>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={onChangePW}
              autoComplete="current-password"
              aria-invalid={
                isSubmitted ? (errors.password ? 'true' : 'false') : undefined
              }
              {...register('password', {
                required: '비밀번호는 필수 입력입니다.',
                minLength: {
                  value: 8,
                  message: '8자리 이상 비밀번호를 사용하세요.',
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: '비밀번호를 정확하게 입력하세요.',
                },
              })}
            />
            {errors.password && (
              <small role="alert">{errors.password.message}</small>
            )}
            <FormControlLabel
              style={{ display: 'block' }}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        <Links href="/">
          <button style={{ width: '100%', height: '50px', margin: '40px 0px' }}>
            회원가입 페이지 이동
          </button>
        </Links>
      </Container>
    </ThemeProvider>
  );
}
