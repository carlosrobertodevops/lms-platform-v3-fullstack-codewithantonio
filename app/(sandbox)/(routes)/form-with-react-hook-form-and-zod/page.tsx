'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';

const cyrillShema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters'),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: 'Passwords must match or go fuck yourself!',
    path: ['confirmPassword'],
  });

type CyrillShemaType = z.infer<typeof cyrillShema>;

const FormWithReactHookFormAndZod = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm<CyrillShemaType>({
    mode: 'onBlur',
    resolver: zodResolver(cyrillShema),
  });

  const onSubmit = async (data: CyrillShemaType) => {
    const result = await new Promise((resolve, reject) =>
      setTimeout(() => resolve('Успешный результат'), 2000),
    );
    console.log({ result });
    reset();
  };

  return (
    <form className='flex flex-col gap-y-2' onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email')}
        type='email'
        className='rounded px-4 py-2'
        placeholder='email'
      />
      {errors?.email && (
        <p className='text-red-500'>{`${errors.email.message}`}</p>
      )}
      <input
        {...register('password')}
        type='password'
        className='rounded px-4 py-2'
        placeholder='password'
      />
      {errors?.password && (
        <p className='text-red-500'>{`${errors.password.message}`}</p>
      )}
      <input
        {...register('confirmPassword')}
        type='password'
        className='rounded px-4 py-2'
        placeholder='confirm password'
      />
      {errors?.confirmPassword && (
        <p className='text-red-500'>{`${errors.confirmPassword.message}`}</p>
      )}
      <button
        type='submit'
        disabled={isSubmitting || !isValid}
        className='rounded bg-green-500 py-2 text-lg font-medium text-white disabled:bg-gray-500'>
        Отправить
      </button>
    </form>
  );
};

export default FormWithReactHookFormAndZod;
