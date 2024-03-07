'use server';

import { API_URL } from '@/constant';
import { LoginPayload } from '@/types/auth';

export async function Login(payload: LoginPayload) {
  const response = await fetch(API_URL + '/auam/login', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const name = response.formData;
  console.log('name', name);
  if (response.ok) {
    return 'Success';
  } else {
    return 'Id & Password Salah';
  }
}
