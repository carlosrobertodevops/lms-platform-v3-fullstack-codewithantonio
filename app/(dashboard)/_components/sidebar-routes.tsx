'use client';

import { BarChart, Compass, Layout, List } from 'lucide-react';
import SidebarRoute from './sidebar-route';
import { usePathname } from 'next/navigation';

const HOME_ROUTES = [
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

const TEACHER_ROUTES = [
  {
    icon: List,
    label: 'Courses',
    href: '/teacher/courses',
  },
  {
    icon: BarChart,
    label: 'Analytics',
    href: '/teacher/analytics',
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname.startsWith('/teacher');

  const routes = isTeacherPage ? TEACHER_ROUTES : HOME_ROUTES;

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
