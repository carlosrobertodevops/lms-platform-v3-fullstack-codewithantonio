'use client';

import { Editor } from '@/components/editor';
import { Preview } from '@/components/preview';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Chapter } from '@prisma/client';
import axios from 'axios';
import { PencilIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

interface ChapterAccessFormProps {
  initialData: Chapter;
  courseId: string;
  chapterId: string;
}

const formSchema = z.object({
  isFree: z.boolean().default(false),
});

type ChapterAccessFormSchemaType = z.infer<typeof formSchema>;

const ChapterAccessForm = ({
  initialData,
  courseId,
  chapterId
}: ChapterAccessFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current)=> !current);

  const router = useRouter();

  const form = useForm<ChapterAccessFormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isFree: !! initialData.isFree,
    },
  });

  const { isValid, isSubmitting } = form.formState;

  const toggleIsEditing = () => setIsEditing((prevState) => !prevState);

  const onSubmit = async (values: ChapterAccessFormSchemaType) => {
    try {
      await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values);
      toast.success('Chapter updated');
      toggleIsEditing();
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className='mt-6 rounded-md border bg-slate-100 p-4'>
      <div className='flex items-center justify-between font-medium'>
        Chapter access
        <Button variant={'ghost'} onClick={toggleIsEditing}>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <PencilIcon className='mr-2 h-4 w-4' />
              Edit access
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p
          className={cn(
            'mt-2 text-sm',
            !initialData.isFree && 'italic text-slate-500',
          )}>
          {initialData.isFree ? (
              <>This chapter is free for preview.</>
          ) : (
              <> This chapter is not free</>
          )}
        </p>
      )}

      {isEditing && (
        <Form {...form}>
          <form
            className='mt-4 space-y-4'
            onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='isFree'
              render={({ field }) => (
                <FormItem className='flex flex-roa items-start space-x-3 space-y-0 rounded-md border p-4'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className='space-y-1 leading-none'>
                    <FormDescription>
                      Check this box if you want to make this chapter free for preview
                    </FormDescription>
                  </div>
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

export default ChapterAccessForm;
