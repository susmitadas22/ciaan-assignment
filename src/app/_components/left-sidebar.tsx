import Link from "next/link";
import { Bookmark, Users, FileText, Calendar } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { User } from "better-auth";

export function LeftSidebar({ user }: { user: User | undefined }) {
  if (!user) {
    return (
      <div className="space-y-4">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-gray-600">Please log in to see your profile</p>
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Profile Card */}
      <Card>
        <div className="relative">
          {/* Cover Image */}
          <div className="h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-lg"></div>

          {/* Profile Content */}
          <CardContent className="pt-0 pb-4">
            <div className="flex flex-col items-center -mt-8">
              <Avatar className="w-16 h-16 border-4 border-white">
                <AvatarFallback className="text-lg bg-gray-200">
                  {user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="text-center mt-2">
                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-600">Developer</p>
                <p className="text-xs text-gray-500 mt-1">CIAAN</p>
              </div>
            </div>

            <div className="border-t border-gray-100 mt-4 pt-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Profile viewers</span>
                <span className="text-blue-600 font-medium">10</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                View all analytics
              </div>
            </div>

            <div className="border-t border-gray-100 mt-3 pt-3">
              <div className="text-xs text-gray-600">
                Get hired faster with Premium
              </div>
              <div className="flex items-center mt-1">
                <Badge className="bg-amber-100 text-amber-800 text-xs">
                  Reactivate Premium: 50% Off
                </Badge>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>

      {/* Quick Links */}
      <Card>
        <CardContent className="p-0">
          <div className="space-y-0">
            <Link
              href="/saved"
              className="flex items-center px-4 py-3 hover:bg-gray-50 text-sm text-gray-700"
            >
              <Bookmark className="w-4 h-4 mr-3" />
              Saved items
            </Link>
            <Link
              href="/groups"
              className="flex items-center px-4 py-3 hover:bg-gray-50 text-sm text-gray-700"
            >
              <Users className="w-4 h-4 mr-3" />
              Groups
            </Link>
            <Link
              href="/newsletters"
              className="flex items-center px-4 py-3 hover:bg-gray-50 text-sm text-gray-700"
            >
              <FileText className="w-4 h-4 mr-3" />
              Newsletters
            </Link>
            <Link
              href="/events"
              className="flex items-center px-4 py-3 hover:bg-gray-50 text-sm text-gray-700"
            >
              <Calendar className="w-4 h-4 mr-3" />
              Events
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
