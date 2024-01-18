'use client';

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
  return <div>This is title form</div>;
};

export default TitleForm;
