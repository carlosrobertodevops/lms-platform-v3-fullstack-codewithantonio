import Navbar from './_components/navbar';
import Sidebar from './_components/sidebar';

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <div className='fixed z-50 h-[80px] w-full md:pl-56'>
        <Navbar />
      </div>
      <div className='fixed z-50 hidden h-full w-56 md:flex inset-y-0 z-50'>
        <Sidebar />
      </div>
      <main className='h-full pt-[80px] md:pl-56'>{children}</main>
    </div>
  );
};

export default DashboardLayout;