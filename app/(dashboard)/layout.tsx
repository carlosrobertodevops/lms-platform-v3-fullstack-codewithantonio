const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <div className='fixed z-50 hidden h-full w-56 md:flex'></div>
      {children}
    </div>
  );
};

export default DashboardLayout;
