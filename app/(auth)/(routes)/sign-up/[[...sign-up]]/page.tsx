import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <SignUp
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
