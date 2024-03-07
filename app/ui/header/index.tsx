import Link from 'next/link';
import { Logo } from '@/ui/logo';
import { Profile } from './Profile';
import { ROUTE } from '@/constant';

export const Header = () => {
  return (
    <header className='flex justify-between items-center flex-row flex-no-wrap px-5 md:px-20 py-5 lg:py-10'>
      <Link href='/'>
        <Logo imageHeight={40} imageWidth={45} titleSizeClass='text-[12px]' />
      </Link>
      <ul className='flex flex-row items-center justify-center gap-5'>
        {ROUTE.map(({ attr, href, key, label }) => {
          return (
            <li key={key}>
              <Link href={href} data-cy={attr}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      <Profile />
    </header>
  );
};
