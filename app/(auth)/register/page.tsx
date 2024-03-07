import Image from 'next/image';
import { RegisterForm } from './components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className='h-screen w-screen relative grid place-items-center'>
      <div className='absolute left-1/2 transform -translate-x-1/2 w-full max-w-[859px] min-w-[320px] h-full max-h-[638px] min-h-[320px] z-10'>
        <Image src='/images/register-bg.png' alt='register' fill sizes='859px' />
      </div>
      <div className='relative max-w-[531px] bg-white rounded-[49px] shadow-lg p-5 lg:p-10 w-full z-20'>
        <p className='font-semibold text-2xl mb-5 mt-4'>Daftar</p>
        <RegisterForm />
      </div>
    </div>
  );
}
