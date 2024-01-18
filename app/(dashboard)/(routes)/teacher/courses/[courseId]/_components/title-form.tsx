'use client';

import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { PencilIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface TitleFormProps {
  initialData: { title: string };
  courseId: string;
}

const titleFormSchema = z.object({
  title: z.string().trim().min(1, 'Title is required'),
});

type TitleFormSchemaType = z.infer<typeof titleFormSchema>;

const TitleForm = ({ initialData, courseId }: TitleFormProps) => {
  const form = useForm<TitleFormSchemaType>({
    mode: 'onBlur',
    resolver: zodResolver(titleFormSchema),
    defaultValues: {
      title: initialData?.title,
    },
  });

  const { isValid, isSubmitting } = form.formState;

  const onSubmit = (values: TitleFormSchemaType) => {
    console.log(values);
  };

  return (
    <div className='mt-6 rounded-md border bg-slate-100 p-4'>
      <div className='flex items-center justify-between font-medium'>
        Course Title
        <Button variant={'ghost'}>
          <PencilIcon className='mr-2 h-4 w-4' />
          Edit
        </Button>
      </div>
    </div>
  );
};

export default TitleForm;
