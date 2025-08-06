import { headers } from "next/headers";
import { auth } from "~/lib/auth";
import { prisma } from "~/lib/prisma";
import { Header } from "./_components/header";
import { PostFeed } from "~/components/post-feed";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  const posts = await prisma.post.findMany({
    include: { user: true },
    orderBy: { createdAt: "desc" },
    where: { userId: session?.user.id },
  });
  if (!session?.user) {
    return redirect("/sign-in");
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen bg-gray-50">
        {/* <Navigation user={user} /> */}
        <main className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="space-y-6">
            <Header user={session?.user} isOwnProfile={true} />
            <div>
              <h3 className="text-lg font-semibold mb-4">Your Posts</h3>
              <PostFeed posts={posts} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
