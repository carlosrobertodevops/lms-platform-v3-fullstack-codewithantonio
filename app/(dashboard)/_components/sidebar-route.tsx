'use client';

import { LucideIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface SidebarRouteProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarRoute = ({ icon: Icon, label, href }: SidebarRouteProps) => {
  const pathname = usePathname();

  const isActive = pathname === href || pathname?.startsWith(`${href}`);

  return (
    <div>
      <Icon className={isActive ? 'text-red-500' : 'text-black'} />
    </div>
  );
};

export default SidebarRoute;
