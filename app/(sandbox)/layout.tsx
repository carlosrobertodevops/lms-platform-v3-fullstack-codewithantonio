const SandboxLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-full items-center justify-center bg-emerald-300'>
      {children}
    </div>
  );
};

export default SandboxLayout;
