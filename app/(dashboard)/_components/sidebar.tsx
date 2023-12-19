import Logo from './logo';

const Sidebar = () => {
  return (
    <div className='flex flex-col overflow-y-auto border-r bg-white shadow-sm '>
      <div className='p-6'>
        <Logo />
      </div>
    </div>
  );
};

export default Sidebar;
