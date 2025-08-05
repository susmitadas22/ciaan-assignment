"use client";

import * as React from "react";
import { Video, ImageIcon, FileText } from "lucide-react";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Textarea } from "~/components/ui/textarea";
import { User } from "better-auth";

export const CreatePostForm: React.FC<{ user: User }> = ({ user }) => {
  const [loading, setLoading] = React.useState(false);
  return (
    <Card>
      <CardContent className="p-4">
        <form className="space-y-4">
          <div className="flex items-start space-x-3">
            <Avatar>
              <AvatarFallback>
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                name="content"
                placeholder="Start a post"
                className="border-0 resize-none text-lg placeholder:text-gray-500 focus:ring-0 p-0"
                rows={3}
                required
              />
            </div>
          </div>

          {/* {state?.error && (
            <div className="text-red-600 text-sm">{state.error}</div>
          )} */}

          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:bg-gray-100"
              >
                <Video className="w-5 h-5 mr-2 text-green-600" />
                Video
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:bg-gray-100"
              >
                <ImageIcon className="w-5 h-5 mr-2 text-blue-600" />
                Photo
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:bg-gray-100"
              >
                <FileText className="w-5 h-5 mr-2 text-orange-600" />
                Write article
              </Button>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              {loading ? "Posting..." : "Post"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
