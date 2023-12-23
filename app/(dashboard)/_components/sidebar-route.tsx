import { LucideIcon } from 'lucide-react';

interface SidebarRouteProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarRoute = ({ icon, label, href }: SidebarRouteProps) => {
  return <div>This is sidebar route</div>;
};

export default SidebarRoute;
