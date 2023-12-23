import NavbarRoutes from '@/components/navbar-routes';
import MobileSidebar from './mobile-sidebar';

const Navbar = () => {
  return (
    <div>
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
