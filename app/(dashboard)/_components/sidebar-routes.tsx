import { Compass, Layout } from 'lucide-react';

`use client`;

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
  return <div className='flex flex-col'>This is a sidebar routes</div>;
};

export default SidebarRoutes;
