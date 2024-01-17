import { cva } from 'class-variance-authority';

const IconBadge = () => {
  const backgroundVariants = cva(
    'flex items-center justify-center rounded-full',
    {
      variants: {
        variant: {
          default: 'bg-sky-100',
          success: 'bg-emarald-100',
        },
        size: {
          default: 'p-2',
          sm: 'p-1',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    },
  );

  const iconVariants = cva('', {
    variants: {
      variant: {
        default: 'text-sky-700',
        success: 'text-emarald-700',
      },
      size: {
        default: 'h-8 w-8',
        sm: 'h-4 w-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  });

  return <div className=''>This is an icon badge</div>;
};

export default IconBadge;
