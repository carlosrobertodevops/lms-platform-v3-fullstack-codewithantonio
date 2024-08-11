import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      width={130}
      height={130}
      alt='Logoipsum'
      src={'/images/logo.svg'}
    />
  );
};

export default Logo;