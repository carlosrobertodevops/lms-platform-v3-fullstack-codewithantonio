import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <SignIn
      appearance={{
        variables: {
          fontFamily: 'Inter',
        },
        elements: {
          formButtonPrimary: {
            fontSize: 14,
          },
        },
      }}
    />
  );
}
