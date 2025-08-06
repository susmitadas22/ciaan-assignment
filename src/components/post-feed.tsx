import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  MessageCircle,
  MoreHorizontal,
  Repeat2,
  Send,
  ThumbsUp,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Post, User } from "~/generated/prisma";

type PostWithUser = Post & {
  user: User;
};

export const PostFeed = ({ posts }: { posts: PostWithUser[] }) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            {/* Post Header */}
            <div className="p-4 pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <Avatar className="w-10 h-10 md:w-12 md:h-12">
                    <AvatarFallback>
                      {post.user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/profile/${post.user.id}`}
                        className="font-semibold hover:text-blue-600 truncate"
                      >
                        {post.user.name}
                      </Link>
                      <span className="text-blue-600">✓</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      Product Engineer @CIAAN
                    </p>
                    <p className="text-xs text-gray-500 flex items-center">
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      • 🌍
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Post Content - Clickable */}
            <Link href={`/${post.id}`} className="block">
              <div className="px-4 pb-3 cursor-pointer hover:bg-gray-50/50">
                <p className="text-gray-900 whitespace-pre-wrap">
                  {post.content}
                </p>
              </div>
            </Link>

            {/* Engagement Stats */}
            <div className="px-4 pb-3">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <ThumbsUp className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <span className="truncate">Susmita Das and 23 others</span>
                </div>
                <span>9 comments</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-t border-gray-100 px-4 py-2">
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 text-gray-600 hover:bg-gray-50 text-xs md:text-sm"
                >
                  <ThumbsUp className="w-4 h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Like</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 text-gray-600 hover:bg-gray-50 text-xs md:text-sm"
                >
                  <MessageCircle className="w-4 h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Comment</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 text-gray-600 hover:bg-gray-50 text-xs md:text-sm"
                >
                  <Repeat2 className="w-4 h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Repost</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 text-gray-600 hover:bg-gray-50 text-xs md:text-sm"
                >
                  <Send className="w-4 h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Send</span>
                </Button>
              </div>
            </div>

            {/* Quick Reactions */}
            <div className="border-t border-gray-100 px-4 py-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  Congrats Sush! 🎉
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Congratulations! 🎉
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs hidden sm:inline-flex"
                >
                  🎉🎉🎉
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs hidden md:inline-flex"
                >
                  Keep shining ✨
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
