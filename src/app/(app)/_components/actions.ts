"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "~/lib/auth";
import { prisma } from "~/lib/prisma";

export const submitpost = async (content: string) => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return;
  }
  const post = await prisma.post.create({
    data: {
      content,
      userId: session.user.id,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: crypto.randomUUID(),
    },
  });
  revalidatePath("/");
  return post;
};
