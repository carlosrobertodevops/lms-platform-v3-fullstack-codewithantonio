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
  const isActive = pathname === href;
  //TODO: Add another condition for isActive variable

  return (
    <div>
      <Icon />
    </div>
  );
};

export default SidebarRoute;
