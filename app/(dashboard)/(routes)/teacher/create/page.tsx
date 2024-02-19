'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'react-hot-toast';

const formSchema = z.object({
  title: z.string().trim().min(1, 'Title is required'),
});

type FormSchemaType = z.infer<typeof formSchema>;

const CreatePage = () => {
  const router = useRouter();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
    },
    mode: 'onBlur',
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: FormSchemaType) => {
    try {
      const response = await axios.post('/api/courses', values);
      toast.success('Course is created');
      router.push(`/teacher/courses/${response.data.id}`);
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className='mx-auto flex h-full max-w-5xl p-6 md:items-center md:justify-center'>
      <div>
        <h1 className='text-2xl'>Name your course</h1>
        <p className='text-sm text-slate-600'>
          How would you like to name your course? Don&apos;t worry, you can
          change this later
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='mt-8 space-y-8'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='e.g. Advanced web development'
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    What will you teach in this course?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex items-center gap-x-2'>
              <Link href={'/teacher/courses'}>
                <Button type='button' variant={'ghost'}>
                  Cancel
                </Button>
              </Link>
              <Button type='submit' disabled={isSubmitting || !isValid}>
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatePage;
