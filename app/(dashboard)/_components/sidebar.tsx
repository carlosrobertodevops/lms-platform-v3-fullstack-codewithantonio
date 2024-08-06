import Logo from './logo';
import SidebarRoutes from './sidebar-routes';

const Sidebar = () => {
  return (
    <div className='flex h-full w-full flex-col overflow-y-auto border-r bg-white shadow-sm'>
      <div className='p-6'>
        <Logo />
      </div>
      <SidebarRoutes />
    </div>
  );
};

export default Sidebar;
