'use client';

import { useState } from 'react';

const FormWithoutReactHookForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <form className='flex flex-col gap-y-2 '>
      <input
        type='email'
        className='rounded px-4 py-2'
        placeholder='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        className='rounded px-4 py-2'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type='password'
        className='rounded px-4 py-2'
        placeholder='confirm password'
        value={confirmPassword}
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
