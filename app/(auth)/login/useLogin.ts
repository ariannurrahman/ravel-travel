'use client';

import axios, { isAxiosError } from 'axios';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { API_URL, TOKEN_KEY, toastErrorStyle, toastSuccessStyle } from '@/constant';
import { LoginPayload } from '@/types/auth';

export const useLogin = () => {
  const router = useRouter();

  const onLogin = async (payload: LoginPayload) => {
    try {
      const response = await axios({
        method: 'post',
        url: API_URL + '/auam/login',
        data: { userId: payload.userId, password: payload.password },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const accessToken = response.data.data.accessToken;
      const name = response.data.data.name;
      setCookie(TOKEN_KEY, accessToken);
      toast(`Selamat Datang ${name}`, {
        position: 'top-center',
        style: toastSuccessStyle,
      });
      router.push('/');
    } catch (err) {
      if (isAxiosError(err)) {
        const message = err?.response?.data.status === 401 ? 'Id & Password Salah' : err?.response?.data.message ?? '';
        toast(message, {
          position: 'top-center',
          style: toastErrorStyle,
        });
      }
    }
  };
  return {
    onLogin,
  };
};
