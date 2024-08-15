import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <SignUp
      appearance={{
        elements: {
          formButtonPrimary: {
            fontSize: 12,
          },
        },
      }}
    />
  );
}
