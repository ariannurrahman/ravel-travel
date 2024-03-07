'use client';

import { RegisterPayload } from '@/types/auth';
import { useForm } from 'react-hook-form';

import { RavelButton } from 'ui/button';
import { useRegister } from '../useRegister';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterPayload>();

  const { onRegister } = useRegister();

  return (
    <form className='flex flex-col w-full h-fit' onSubmit={handleSubmit(onRegister)}>
      <label className='form-label' htmlFor='userId'>
        User ID
      </label>
      <input
        {...register('userId', {
          required: 'User ID harus diisi',
          validate: (value: string) => {
            const formattedValue = value.replace(/\s/g, '.');
            if (!/^[a-zA-Z0-9]+$/.test(formattedValue)) {
              return 'Hanya menerima alphanumeric';
            }
            return true;
          },
        })}
        className='border-[1px] border-[#CCCCCC] rounded-[5px] h-9 pl-3'
        data-cy='input-userId'
        id='userId'
        name='userId'
        placeholder='Masukan User Id'
        type='string'
      />
      {(
        <p className='text-danger mt-1 underline decoration-[#ff0000] underline-offset-2'>
          {errors['userId']?.message}
        </p>
      ) ?? null}

      <label className='mt-3' htmlFor='userId'>
        Nama
      </label>
      <input
        {...register('name', { required: 'Nama harus diisi' })}
        className='border-[1px] border-[#CCCCCC] rounded-[5px] h-9 pl-3'
        data-cy='input-name'
        id='name'
        name='name'
        placeholder='Masukan nama'
        type='string'
      />
      {(
        <p className='text-danger mt-1 underline decoration-[#ff0000] underline-offset-2'>{errors['name']?.message}</p>
      ) ?? null}

      <label className='mt-3' htmlFor='password'>
        Password
      </label>
      <input
        {...register('password', { required: 'Password Harus diisi' })}
        className='border-[1px] border-[#CCCCCC] rounded-[5px] h-9 pl-3 '
        data-cy='input-password'
        id='password'
        name='password'
        placeholder='Masukan Password'
        type='password'
      />
      {(
        <p className='text-danger mt-1 underline decoration-[#ff0000] underline-offset-2'>
          {errors['password']?.message}
        </p>
      ) ?? null}
      <label className='mt-3' htmlFor='password'>
        Konfirmasi Password
      </label>
      <input
        {...register('confirmPassword', {
          required: 'Konfirmasi Password Harus diisi',
          validate: (val: string) => {
            if (watch('password') !== val) {
              return 'Password tidak sama';
            }
            return true;
          },
        })}
        className='border-[1px] border-[#CCCCCC] rounded-[5px] h-9 pl-3 '
        data-cy='input-confirmation_password'
        id='confirmPassword'
        name='confirmPassword'
        placeholder='Masukan Konfirmasi Password'
        type='password'
      />
      {(
        <p className='text-danger mt-1 underline decoration-[#ff0000] underline-offset-2'>
          {errors['confirmPassword']?.message}
        </p>
      ) ?? null}

      <RavelButton dataCy='btn-register' className='w-full h-[76px] mt-10 rounded-lg' type='submit' variant='primary'>
        <p className='text-white font-bold text-2xl'>Daftar</p>
      </RavelButton>
    </form>
  );
};
