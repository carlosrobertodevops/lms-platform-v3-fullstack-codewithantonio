'use client';

import { FormEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const FormWithReactHookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { isSubmitting, isValid, errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = async (data: FieldValues) => {
    const result = await new Promise((resolve, reject) =>
      setTimeout(() => resolve('Успешный результат'), 2000),
    );
    console.log({ result });
    reset();
  };

  return (
    <form className='flex flex-col gap-y-2' onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Incorrect email',
          },
        })}
        type='email'
        className='rounded px-4 py-2'
        placeholder='email'
      />
      {errors?.email && (
        <p className='text-red-500'>{`${errors.email.message}`}</p>
      )}
      <input
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
        })}
        type='password'
        className='rounded px-4 py-2'
        placeholder='password'
      />
      {errors?.password && (
        <p className='text-red-500'>{`${errors.password.message}`}</p>
      )}
      <input
        {...register('confirmPassword', {
          required: 'Confirm password is required',
          minLength: {
            value: 6,
            message: 'Confirm password must be at least 6 characters',
          },
          validate: (value) =>
            value === getValues('password') || `Password must match`,
        })}
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

export default FormWithReactHookForm;
