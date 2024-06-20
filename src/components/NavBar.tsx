import { signIn } from "@/auth";
import Link from "next/link";
import { Button } from "./ui/button";
import UserButton from "./UserButton";
import getSession from "@/lib/getSession";

export default async function NavBar() {
  // TODO: Show the currently logged-in user
  const session = await getSession();
  const user = session?.user;

  return (
    <header className="sticky top-0 bg-background px-8 shadow-sm">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 py-4">
        <Link href="/" className="font-bold">
          Next-Auth v5 Tutorial
        </Link>
        {user ? <UserButton user={user}></UserButton> : SignInButton()}
      </nav>
    </header>
  );
}

function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button className="rounded-none" type="submit">
        Sign in
      </Button>
    </form>
  );
}
