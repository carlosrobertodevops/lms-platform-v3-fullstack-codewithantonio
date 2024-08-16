import { SignIn } from '@clerk/nextjs';

export default function Page() {
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
