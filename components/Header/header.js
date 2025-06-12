import Link from "next/link";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { PenBox } from "lucide-react";
import UserMenu from "../user-menu";

const Header = () => {
  return (
    <header className=" p-4">
      <div
        className="max-w-6xl mx-auto flex justify-between items-center m-3 px-4 py-3 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 bg-purple-100
"
      >
        <Link href="/">
          <span className="text-2xl font-bold text-blacks hover:text-[#000000] transition">
            TaskNova
          </span>
        </Link>

        {/* Right side: Auth buttons */}
        <div className="flex items-center gap-4 ">
          <Link href="/project/create">
            <Button className="py-3">
              <PenBox size={20} />
              <span>Create Project</span>

            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant={"outline"} >
               Log In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserMenu/>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
