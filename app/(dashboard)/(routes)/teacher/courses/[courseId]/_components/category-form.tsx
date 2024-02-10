'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { PencilIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

interface CategoryFormProps {
  initialData: { categoryId: string | null };
  courseId: string;
  categories: { name: string; id: string }[];
}

const categoryFormSchema = z.object({
  categoryId: z.string().min(1),
});

type CategoryFormSchemaType = z.infer<typeof categoryFormSchema>;

const CategoryForm = ({
  initialData,
  courseId,
  categories,
}: CategoryFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const form = useForm<CategoryFormSchemaType>({
    mode: 'onBlur',
    resolver: zodResolver(categoryFormSchema),
    defaultValues: {
      categoryId: initialData?.categoryId ?? '',
    },
  });

  const { isValid, isSubmitting } = form.formState;

  const toggleIsEditing = () => setIsEditing((prevState) => !prevState);

  const onSubmit = async (values: CategoryFormSchemaType) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success('Course updated');
      toggleIsEditing();
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    }
  };

  const selectedCategorie = categories.find(
    (category) => category.id === initialData.categoryId,
  )?.name;

  return (
    <div className='mt-6 rounded-md border bg-slate-100 p-4'>
      <div className='flex items-center justify-between font-medium'>
        Course Category
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
      {!isEditing && (
        <p
          className={cn(
            'mt-2 text-sm',
            !initialData.categoryId && 'italic text-slate-500',
          )}>
          {selectedCategorie ?? 'No category'}
        </p>
      )}

      {isEditing && (
        <Form {...form}>
          <form
            className='mt-4 space-y-4'
            onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='categoryId'
              render={({ field }) => (
                <FormItem>
                  <FormControl></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex items-center gap-x-2'>
              <Button type='submit' disabled={isSubmitting || !isValid}>
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default CategoryForm;
