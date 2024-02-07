const SandboxLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-full items-center justify-center bg-slate-100'>
      {children}
    </div>
  );
};

export default SandboxLayout;
