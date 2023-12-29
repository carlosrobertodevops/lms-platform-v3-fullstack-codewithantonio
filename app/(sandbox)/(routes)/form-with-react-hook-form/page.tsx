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
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const result = await new Promise((resolve, reject) =>
      setTimeout(() => resolve('Успешный результат'), 2000),
    );
    console.log({ result });
  };

  return (
    <form className='flex flex-col gap-y-2' onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', {
          required: 'Email is required',
        })}
        type='email'
        className='rounded px-4 py-2'
        placeholder='email'
      />
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
      <input
        {...register('confirmPassword', {
          required: 'Confirm password is required',
        })}
        type='password'
        className='rounded px-4 py-2'
        placeholder='confirm password'
      />
      <button
        type='submit'
        className='rounded bg-green-500 py-2 text-lg font-medium text-white disabled:bg-gray-500'>
        Отправить
      </button>
    </form>
  );
};

export default FormWithReactHookForm;
