import Image from 'next/image';

interface LogoProps {
  imageWidth: number;
  imageHeight: number;
  titleSizeClass?: string;
  captionSizeClass?: string;
}

export const Logo = ({ imageHeight, captionSizeClass, imageWidth, titleSizeClass }: LogoProps) => {
  return (
    <div className='flex flex-nowrap flex-row justify-center items-center'>
      <Image src='/images/logo.svg' alt='logo' width={imageWidth} height={imageHeight} priority />
      <div>
        <h1 className={`font-bold text-left leading-none ${titleSizeClass ?? 'text-5xl md:text-[64px]'}`}>Ravel</h1>
        <h1 className={`font-light text-left ${captionSizeClass ?? 'text-[10px]'} `}>Travel Solution by Randy</h1>
      </div>
    </div>
  );
};
