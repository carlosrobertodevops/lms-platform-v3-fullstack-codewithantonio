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
import { Chapter } from '@prisma/client';
import axios from 'axios';
import { Loader2, PlusCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import ChaptersList from './chapters-list';

interface ChaptersFormProps {
  initialData: { chapters: Chapter[] };
  courseId: string;
}

const chaptersFormSchema = z.object({
  chapterTitle: z.string().trim().min(1, 'Chapter title is required'),
});

type ChaptersFormSchemaType = z.infer<typeof chaptersFormSchema>;

const ChaptersForm = ({ initialData, courseId }: ChaptersFormProps) => {
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const router = useRouter();

  const form = useForm<ChaptersFormSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(chaptersFormSchema),
    defaultValues: {
      chapterTitle: '',
    },
  });

  const { isValid, isSubmitting } = form.formState;

  const toggleIsCreating = () => setIsCreating((prevState) => !prevState);

  const onSubmit = async (values: ChaptersFormSchemaType) => {
    try {
      await axios.post(`/api/courses/${courseId}/chapters`, values);
      toast.success('Chapter is created');
      toggleIsCreating();
      form.reset();
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    }
  };

  const handleOnReorder = async (
    updatedOrder: { id: string; position: number }[],
  ) => {
    try {
      setIsUpdating(true);
      await axios.patch(`/api/courses/${courseId}/chapters/reorder`, {
        list: updatedOrder,
      });
      toast.success('Order is changed');
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleOnEdit = (id: string) => {
    router.push(`/teacher/courses/${courseId}/chapters/${id}`);
  };

  return (
    <div className='relative mt-6 rounded-md border bg-slate-100 p-4'>
      {isUpdating && (
        <div className='absolute inset-0 flex items-center justify-center rounded-md bg-slate-500/20'>
          <Loader2 className='h-6 w-6 animate-spin text-sky-700' />
        </div>
      )}
      <div className='flex items-center justify-between font-medium'>
        Course Chapters
        <Button variant={'ghost'} onClick={toggleIsCreating}>
          {isCreating ? (
            <>Cancel</>
          ) : (
            <>
              <PlusCircle className='mr-2 h-4 w-4' />
              Add
            </>
          )}
        </Button>
      </div>

      {isCreating && (
        <Form {...form}>
          <form
            className='mt-4 space-y-4'
            onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='chapterTitle'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='e.g. "Introduction to the course"'
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex items-center gap-x-2'>
              <Button type='submit' disabled={isSubmitting || !isValid}>
                Create
              </Button>
            </div>
          </form>
        </Form>
      )}

      {!isCreating && (
        <>
          {initialData.chapters.length === 0 && (
            <p className='mt-2 text-sm italic text-slate-500'>No chapters</p>
          )}
          {initialData.chapters.length !== 0 && (
            <ChaptersList
              items={initialData.chapters}
              isUpdating={isUpdating}
              onEdit={handleOnEdit}
              onReorder={handleOnReorder}
            />
          )}
          <p className='mt-4 text-center text-xs text-muted-foreground'>
            Drag and drop to reorder the chapters
          </p>
        </>
      )}
    </div>
  );
};

export default ChaptersForm;
