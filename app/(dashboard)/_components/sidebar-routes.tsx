'use client';

import { Compass, Layout } from 'lucide-react';
import SidebarRoute from './sidebar-route';

const GUEST_ROUTES = [
  {
    icon: Layout,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: Compass,
    label: 'Browse',
    href: '/search',
  },
];

const SidebarRoutes = () => {
  const routes = GUEST_ROUTES;
  return (
    <div className='flex flex-col'>
      {routes.map((route) => (
        <SidebarRoute
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
