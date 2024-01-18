'use client';

import { zodResolver } from '@hookform/resolvers/zod';
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
  return <div>This is title form</div>;
};

export default TitleForm;
