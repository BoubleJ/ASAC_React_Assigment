'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../Modal'

export function LoginForm() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    // 실제 로그인 처리를 여기에 추가해야 합니다.
    if (id === 'helloworld' && password === 'Qwer!234') {
      setMessage('로그인이 되었습니다.');
    } else {
      setMessage('로그인이 실패했습니다.');
    }
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(async data => {
        await new Promise(r => setTimeout(r, 1000));
        alert(JSON.stringify(data));
      })}
    >
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        placeholder="아이디를 입력하세요"
        value={id}
        onChange={e => setId(e.target.value)}
        aria-invalid={
          isSubmitted ? (errors.email ? 'true' : 'false') : undefined
        }
        {...register('email', {
          required: '아이디는 필수 입력입니다.',
        })}
      />
      {errors.email && <small role="alert">{errors.email.message}</small>}
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="패스워드를 입력하세요"
        aria-invalid={
          isSubmitted ? (errors.password ? 'true' : 'false') : undefined
        }
        {...register('password', {
          required: '비밀번호는 필수 입력입니다.',
          minLength: {
            value: 8,
            message: '비밀번호를 정확하게 입력하세요.',
          },
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message: '비밀번호를 정확하게 입력하세요.',
          },
        })}
      />
      {errors.password && <small role="alert">{errors.password.message}</small>}
      <button type="submit" disabled={isSubmitting} onClick={handleLogin}>
        로그인
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <div>
      <LoginForm></LoginForm>
    </div>
  );
}
