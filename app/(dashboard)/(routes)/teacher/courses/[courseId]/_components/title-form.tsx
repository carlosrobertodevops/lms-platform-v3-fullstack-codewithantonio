'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { PencilIcon } from 'lucide-react';
import { useState } from 'react';
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
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<TitleFormSchemaType>({
    mode: 'onBlur',
    resolver: zodResolver(titleFormSchema),
    defaultValues: {
      title: initialData?.title,
    },
  });

  const { isValid, isSubmitting } = form.formState;

  const toggleIsEditing = () => setIsEditing((prevState) => !prevState);

  const onSubmit = (values: TitleFormSchemaType) => {
    console.log(values);
  };

  return (
    <div className='mt-6 rounded-md border bg-slate-100 p-4'>
      <div className='flex items-center justify-between font-medium'>
        Course Title
        <Button variant={'ghost'} onClick={toggleIsEditing}>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <PencilIcon className='mr-2 h-4 w-4' />
              Edit
            </>
          )}
        </Button>
      </div>
      {!isEditing && <p className='mt-2 text-sm'>{initialData.title}</p>}

      {isEditing && (
        <Form {...form}>
          <form
            className='mt-4 space-y-4'
            onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='e.g. "Advanced web development'
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      )}
    </div>
  );
};

export default TitleForm;
