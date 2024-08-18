'use client';

import { Button } from '@/components/ui/button';
import { SignedOut, SignInButton, useAuth } from '@clerk/nextjs';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SearchInput } from './search-input';

import { isTeacher } from "@/lib/teacher";

export const NavbarRoutes = () => {

  const { userId } = useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapters");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block" >
          <SearchInput />
        </div>
      )}

      <div className='ml-auto flex items-center gap-x-2'>
        {isTeacherPage || isCoursePage ? (
          <Link href={'/'}>
            <Button size={'sm'} variant={'ghost'}>
              <LogOut size={14} className='mr-2' />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href={'/teacher/courses'}>
            <Button size={'sm'} variant={'ghost'}>
              Teacher Mode
            </Button>
          </Link>
        ) : null}
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton />
        </SignedOut>
      </div>
    </>
  )
}

export default NavbarRoutes;