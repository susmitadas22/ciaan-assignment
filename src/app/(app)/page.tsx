import { headers } from "next/headers";
import { auth } from "~/lib/auth";
import { CreatePostForm } from "./_components/create-post-form";
import { RightSidebar } from "./_components/right-sidebar";
import { LeftSidebar } from "./_components/left-sidebar";
import { prisma } from "~/lib/prisma";
import { PostFeed } from "~/components/post-feed";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });
  const posts = await prisma.post.findMany({
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header user={user} /> */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Hidden on mobile, shown on lg+ */}
          <div className="hidden lg:block lg:col-span-3">
            <LeftSidebar user={session?.user} />
          </div>

          {/* Main Feed */}
          <div className="col-span-1 lg:col-span-6">
            <div className="space-y-4">
              {session?.user && <CreatePostForm user={session?.user} />}
              <PostFeed posts={posts} />
            </div>
          </div>

          {/* Right Sidebar - Hidden on mobile and tablet, shown on lg+ */}
          <div className="hidden lg:block lg:col-span-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
