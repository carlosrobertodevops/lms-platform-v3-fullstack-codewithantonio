import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className='mr-4 transition hover:opacity-75 md:hidden'>
        <Menu />
      </SheetTrigger>
      <SheetContent>Content</SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
