import getSession from "@/lib/getSession";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin",
};

export default async function Page() {
  // TODO: Redirect non-admin users
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/signin?callbackUrl=/admin");
  }
  if (user.role !== "admin") {
    return (
      <main className="mx-auto my-10 flex flex-col items-center justify-center space-y-3 ">
        <h1 className="text-center text-xl font-bold">Admin Page</h1>
        <p className="text-center">You don't have access to this page.</p>
        <Link
          href={"/"}
          className="w-fit rounded-md bg-black px-4 py-2 text-white"
        >
          Go to home page
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto my-10 space-y-3">
      <h1 className="text-center text-xl font-bold">Admin Page</h1>
      <p className="text-center">Welcome, admin!</p>
    </main>
  );
}
