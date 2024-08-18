import { SignIn } from '@clerk/nextjs';
import React from 'react';

export default function ReAuth() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary: {
            fontSize: 13,
          },
        }
      }}
    />
  );
}