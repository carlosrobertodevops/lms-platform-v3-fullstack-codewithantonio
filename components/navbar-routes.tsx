'use client';

import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';

const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith('/teacher');
  const isPlayerPage = pathname?.includes('/chapters');

  return (
    <div className='ml-auto flex items-center gap-x-2'>
      {isTeacherPage || isPlayerPage ? (
        <Button size={'sm'} variant={'ghost'}>
          Exit
        </Button>
      ) : (
        <Button size={'sm'} variant={'ghost'}>
          Teacher Mode
        </Button>
      )}
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default NavbarRoutes;
