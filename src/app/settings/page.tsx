import { Metadata } from "next";
import SettingsPage from "./SettingsPage";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function Page() {
  // TODO: Protect this page via authentication
  const session = await auth();
  const user = session?.user;
  // if (!user) return <NotFound></NotFound>;
  if (!user) {
    redirect("/signin?callbackUrl=/settings");
  }
  return <SettingsPage user={user} />;
}
