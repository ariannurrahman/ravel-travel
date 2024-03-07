'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { LoginPayload } from '@/types/auth';
import { RavelButton } from 'ui/button';
import { useLogin } from '../useLogin';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>();

  const { onLogin } = useLogin();

  return (
    <form className='flex flex-col w-full h-fit' onSubmit={handleSubmit(onLogin)}>
      <label className='form-label' htmlFor='userId'>
        User ID
      </label>
      <input
        {...register('userId', { required: 'User ID harus diisi' })}
        className='border-[1px] border-[#CCCCCC] rounded-[5px] h-9 pl-3'
        id='userId'
        type='string'
        name='userId'
        data-cy='input-userId'
      />
      {(
        <p className='text-danger mt-1 underline decoration-[#ff0000] underline-offset-2'>
          {errors['userId']?.message}
        </p>
      ) ?? null}
      <label className='form-label mt-5' htmlFor='password'>
        Password
      </label>

      <input
        {...register('password', { required: 'Password Harus diisi' })}
        className='border-[1px] border-[#CCCCCC] rounded-[5px] h-9 pl-3 '
        id='password'
        type='password'
        name='password'
        data-cy='input-password'
      />
      {(
        <p className='text-danger mt-1 underline decoration-[#ff0000] underline-offset-2'>
          {errors['password']?.message}
        </p>
      ) ?? null}
      <div className='flex items-start my-5'>
        <div className='flex items-center h-5'>
          <input
            {...register('remember')}
            data-cy='input-remember_me'
            id='remember'
            aria-describedby='remember'
            type='checkbox'
            className='w-5 h-5 border border-[#BEBEBE] rounded-lg bg-transparent'
          />
        </div>
        <div className='ml-3 text-sm'>
          <label htmlFor='remember' className='text-[#7C7C7C] font-semibold text-[12px]'>
            Ingat saya!
          </label>
        </div>
      </div>
      <RavelButton dataCy='btn-login' className='w-full h-[76px]' type='submit' variant='primary'>
        <p className='text-white font-bold text-2xl'>Login</p>
      </RavelButton>

      <p className='text-[14px] font-semibold my-5 text-center'>atau</p>

      <p className='text-[#B5B5B5] font-semibold text-[14px] text-center'>
        Belum punya akun?{' '}
        <span className='text-[#4BFF72]'>
          <button>
            <Link href='/register'>Daftar </Link>
          </button>
        </span>
      </p>
    </form>
  );
};
