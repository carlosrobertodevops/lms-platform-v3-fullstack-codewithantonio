import { SignIn } from '@clerk/nextjs';
import React from 'react';

export default async function ReAuth() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary: {
            // fontFamily: "roboto",
            fontSize: 14,
          },
        }
      }}
    />
  );
}