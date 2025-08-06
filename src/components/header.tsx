import Link from "next/link";
import {
  Search,
  Home,
  UsersIcon,
  Briefcase,
  MessageCircle,
  Bell,
  UserIcon,
  Grid3X3,
} from "lucide-react";
import { User } from "better-auth";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const Header = ({ user }: { user: User | undefined }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left section - Logo and Search */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">in</span>
              </div>
            </Link>
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search"
                className="pl-10 w-48 md:w-64 bg-blue-50 border-0 focus:bg-white"
              />
            </div>
          </div>

          {/* Right section - Navigation */}
          <nav className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
            {user ? (
              <>
                <Link
                  href="/"
                  className="md:flex hidden flex-col items-center text-gray-600 hover:text-gray-900 group"
                >
                  <Home className="w-5 h-5 md:w-6 md:h-6 mb-1" />
                  <span className="text-xs hidden sm:block">Home</span>
                </Link>
                <Link
                  href="/"
                  className="md:flex hidden flex-col items-center text-gray-600 hover:text-gray-900 group"
                >
                  <UsersIcon className="w-5 h-5 md:w-6 md:h-6 mb-1" />
                  <span className="text-xs hidden sm:block">My Network</span>
                </Link>
                <Link
                  href="/"
                  className="md:flex hidden flex-col items-center text-gray-600 hover:text-gray-900 group"
                >
                  <Briefcase className="w-5 h-5 md:w-6 md:h-6 mb-1" />
                  <span className="text-xs hidden sm:block">Jobs</span>
                </Link>
                <Link
                  href="/"
                  className="md:flex hidden flex-col items-center text-gray-600 hover:text-gray-900 group"
                >
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mb-1" />
                  <span className="text-xs hidden sm:block">Messaging</span>
                </Link>
                <Link
                  href="/"
                  className="md:flex hidden flex-col items-center text-gray-600 hover:text-gray-900 group relative"
                >
                  <Bell className="w-5 h-5 md:w-6 md:h-6 mb-1" />
                  <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center p-0">
                    20
                  </Badge>
                  <span className="text-xs hidden sm:block">Notifications</span>
                </Link>
                <Link
                  href="/profile"
                  className="flex flex-col items-center text-gray-600 hover:text-gray-900 group"
                >
                  <UserIcon className="w-5 h-5 md:w-6 md:h-6 mb-1" />
                  <span className="text-xs hidden sm:block">Me</span>
                </Link>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm">
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </>
            )}
            <div className="border-l border-gray-200 pl-2 md:pl-4 hidden md:block">
              <Link
                href="/"
                className="flex flex-col items-center text-gray-600 hover:text-gray-900 group"
              >
                <Grid3X3 className="w-5 h-5 md:w-6 md:h-6 mb-1" />
                <span className="text-xs">For Business</span>
              </Link>
            </div>
            <div className="text-xs text-amber-600 font-medium hidden lg:block">
              Premium: 50% Off
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
