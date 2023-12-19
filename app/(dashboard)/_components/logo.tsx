import Image from 'next/image';

const Logo = () => {
  return (
    <Image alt='Logoipsum' src={'/images/logo.svg'} width={130} height={130} />
  );
};

export default Logo;
