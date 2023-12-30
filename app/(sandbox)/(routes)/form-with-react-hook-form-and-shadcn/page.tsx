'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((allValues) => allValues.password === allValues.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

const FormWithReactHookFormAndShadcn = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
  });

  return <div>This is FormWithReactHookFormAndShadcn</div>;
};

export default FormWithReactHookFormAndShadcn;
