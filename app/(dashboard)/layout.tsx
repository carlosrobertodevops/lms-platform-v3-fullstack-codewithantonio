import Sidebar from './_components/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <div className='fixed z-50 hidden h-full w-56 md:flex'>
        <Sidebar />
      </div>
      <main className='h-full pl-56'>{children}</main>
    </div>
  );
};

export default DashboardLayout;
