import { prisma } from "~/lib/prisma";
import { Header } from "../_components/header";
import { notFound } from "next/navigation";
import { PostFeed } from "~/components/post-feed";
import { auth } from "~/lib/auth";
import { headers } from "next/headers";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth.api.getSession({ headers: await headers() });
  const user = await prisma.user.findUnique({
    where: { id },
  });
  const posts = await prisma.post.findMany({
    include: { user: true },
    orderBy: { createdAt: "desc" },
    where: { userId: user?.id },
  });
  if (!user) {
    return notFound();
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="space-y-6">
            <Header user={user} isOwnProfile={user.id === session?.user?.id} />
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {user.name}&apos;s Posts
              </h3>
              <PostFeed posts={posts} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
