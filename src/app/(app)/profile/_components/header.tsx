"use client";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { LogOut, Calendar, Mail, Shield, AlertTriangle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { User } from "better-auth";
import { authClient } from "~/lib/auth-client";
import { useRouter } from "next/navigation";

// Format date helper
const formatDate = (date: Date | string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const Header = ({
  user,
  isOwnProfile,
}: {
  user: User;
  isOwnProfile: boolean;
}) => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => router.push("/"),
        },
      });
      // Redirect will be handled by auth configuration
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">
            {isOwnProfile ? "Your Profile" : `${user.name}'s Profile`}
          </CardTitle>

          {isOwnProfile && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 transition-all duration-200"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Logout</span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    Confirm Logout
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to log out of your account?
                    You&apos;ll need to sign in again to access your profile.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Yes, Logout
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Main Profile Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Avatar */}
          <div className="relative">
            <Avatar className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-white shadow-lg">
              <AvatarImage
                src={user.image!}
                alt={`${user.name}'s avatar`}
                className="object-cover"
              />
              <AvatarFallback className="text-xl sm:text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            {/* Online/Verified Indicator */}
            {user.emailVerified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                <Shield className="w-3 h-3 text-white" />
              </div>
            )}
          </div>

          {/* User Info */}
          <div className="flex-1 space-y-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                {user.name}
              </h2>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  {user.email}
                </Badge>
                {user.emailVerified && (
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                    <Shield className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
            </div>

            {/* Account Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <div>
                  <span className="font-medium">Member since:</span>
                  <br />
                  <span>{formatDate(user.createdAt)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <div>
                  <span className="font-medium">Last updated:</span>
                  <br />
                  <span>{formatDate(user.updatedAt)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
