import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

const FormWithReactHookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { isSubmitting, isValid, errors },
  } = useForm();

  return (
    <form className='flex flex-col gap-y-2'>
      <input
        type='email'
        className='rounded px-4 py-2'
        placeholder='email'
        required
      />
      <input
        type='password'
        className='rounded px-4 py-2'
        placeholder='password'
        required
        minLength={6}
      />
      <input
        type='password'
        className='rounded px-4 py-2'
        placeholder='confirm password'
        required
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
