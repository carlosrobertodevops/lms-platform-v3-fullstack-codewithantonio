import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <SignUp
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
