import { headers } from "next/headers";
import { Header } from "~/components/header";
import { auth } from "~/lib/auth";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({ headers: await headers() });
  return (
    <div>
      <Header user={session?.user} />
      {children}
    </div>
  );
}
