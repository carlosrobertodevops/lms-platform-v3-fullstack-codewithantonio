'use client';

import { FormEvent, useState } from 'react';

const FormWithoutReactHookForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    console.log({ email, password, confirmPassword });
    setIsSubmitting(false);
  };

  return (
    <form className='flex flex-col gap-y-2' onSubmit={handleSubmit}>
      <input
        type='email'
        className='rounded px-4 py-2'
        placeholder='email'
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        className='rounded px-4 py-2'
        placeholder='password'
        value={password}
        required
        minLength={6}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type='password'
        className='rounded px-4 py-2'
        placeholder='confirm password'
        value={confirmPassword}
        required
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <button
        type='submit'
        className='rounded bg-green-500 py-2 text-lg font-medium text-white disabled:bg-gray-500'>
        Отправить
      </button>
    </form>
  );
};

export default FormWithoutReactHookForm;
