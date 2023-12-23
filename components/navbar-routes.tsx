'use client';

import { UserButton } from '@clerk/nextjs';

const NavbarRoutes = () => {
  return (
    <div className='ml-auto flex items-center gap-x-2'>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default NavbarRoutes;
