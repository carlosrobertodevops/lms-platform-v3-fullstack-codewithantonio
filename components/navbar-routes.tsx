'use client';

import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith('/teacher');
  const isPlayerPage = pathname?.includes('/chapters');

  return (
    <div className='ml-auto flex items-center gap-x-2'>
      {isTeacherPage || isPlayerPage ? (
        <Link href={'/'}>
          <Button size={'sm'} variant={'ghost'}>
            <LogOut size={16} className='mr-2' />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href={'/teacher/courses'}>
          <Button size={'sm'} variant={'ghost'}>
            Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton
        afterSignOutUrl='/'
      />
    </div>
  );
};

export default NavbarRoutes;
