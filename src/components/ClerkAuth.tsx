import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const ClerkAuth = () => {
  return (
    <div>
      {/* Render the sign-in button if the user is not signed in */}
      <SignedOut>
        <SignInButton>
          <button className="flex items-center justify-center space-x-2 w-full px-3 py-2 text-base font-medium bg-aqua/15 text-aqua hover:bg-aqua/10 hover:shadow-aquay rounded-md transition duration-300">
            Sign In / Sign Up
          </button>
        </SignInButton>
      </SignedOut>

      {/* Render the user button if the user is signed in */}
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </div>
  );
};
