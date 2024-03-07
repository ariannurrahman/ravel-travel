import Image from 'next/image';

export const HomeHero = () => {
  return (
    <div className='flex justify-start items-end relative h-[471px]'>
      <div className='w-full h-full absolute top-0 left-0 z-10'>
        <Image src='/images/home-hero.png' alt='home hero' fill priority />
      </div>
      <div className='relative z-20 px-20 pb-10'>
        <h1 className='text-white font-bold text-[40px] '>Ravel</h1>
        <h3 className='text-white font-bold text-2xl '>Travel Solution</h3>
      </div>
    </div>
  );
};
