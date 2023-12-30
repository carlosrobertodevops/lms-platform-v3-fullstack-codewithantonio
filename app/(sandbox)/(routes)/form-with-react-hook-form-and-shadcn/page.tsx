'use client';

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
  return <div>This is FormWithReactHookFormAndShadcn</div>;
};

export default FormWithReactHookFormAndShadcn;
