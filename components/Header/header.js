import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-end items-center gap-4 p-4">
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
