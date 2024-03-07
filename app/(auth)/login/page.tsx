import Image from 'next/image';
import { LoginForm } from './components/LoginForm';
import { Logo } from '@/ui/logo';

export default function LoginPage() {
  return (
    <div className='h-screen w-screen grid grid-cols-1 md:grid-cols-2'>
      <div className='w-full h-full relative'>
        <Image src='/images/login-bg.png' alt='login' fill />
      </div>
      <div className='p-3 lg:p-10 grid place-items-center w-full'>
        <div className='rounded-[49px] shadow-lg p-5 lg:p-10 w-full'>
          <Logo imageHeight={132} imageWidth={92} />

          <p className='font-semibold text-2xl mb-10 mt-4'>Masuk</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
