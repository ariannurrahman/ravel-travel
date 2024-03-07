import Image from 'next/image';

export const Profile = () => {
  const name = '';

  return (
    <div className='flex flex-row items-center justify-center gap-5'>
      <p className='' data-cy='h-profile'>
        Halo, {name ?? '-'}
      </p>
      <Image src='/images/avatar.png' alt='profile' width={30} height={30} />
    </div>
  );
};
