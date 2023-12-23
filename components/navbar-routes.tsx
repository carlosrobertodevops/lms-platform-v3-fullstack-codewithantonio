'use client';

import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith('/teacher');
  const isCoursePage = pathname?.includes('/chapter');

  return (
    <div className='ml-auto flex items-center gap-x-2'>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default NavbarRoutes;
