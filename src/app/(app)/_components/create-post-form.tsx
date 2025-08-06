"use client";

import * as React from "react";
import { Video, ImageIcon, FileText } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Textarea } from "~/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { User } from "better-auth";
import { submitpost } from "./actions";
import { toast } from "sonner";

// Zod schema for form validation
const postSchema = z.object({
  content: z
    .string()
    .min(1, { message: "Post content cannot be empty" })
    .max(500, { message: "Post content cannot exceed 500 characters" }),
});

type PostFormValues = z.infer<typeof postSchema>;

export const CreatePostForm: React.FC<{ user: User }> = ({ user }) => {
  const [loading, setLoading] = React.useState(false);

  // Initialize form with React Hook Form and Zod resolver
  const form = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      content: "",
    },
  });

  const handleSubmit = async (data: PostFormValues) => {
    setLoading(true);
    try {
      const post = await submitpost(data.content);
      if (post) {
        form.reset();
        toast.success("Post created successfully!");
        console.log("Post created:", post);
      } else {
        toast.error("Failed to create post");
        console.error("Failed to create post");
      }
    } catch (error) {
      toast.error("An error occurred while creating the post");
      console.error("Error creating post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-4 sm:p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            {/* Main content area */}
            <div className="flex items-start space-x-3">
              <Avatar className="flex-shrink-0">
                <AvatarFallback>
                  {user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Start a post"
                          className="border-0 resize-none text-base sm:text-lg placeholder:text-gray-500 focus:ring-0 p-0 min-h-[80px] sm:min-h-[100px]"
                          rows={3}
                        />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Actions section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 border-t border-gray-100 space-y-3 sm:space-y-0">
              {/* Media buttons - responsive layout */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:bg-gray-100 text-xs sm:text-sm flex-shrink-0"
                >
                  <Video className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-green-600" />
                  <span className="hidden xs:inline">Video</span>
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:bg-gray-100 text-xs sm:text-sm flex-shrink-0"
                >
                  <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-blue-600" />
                  <span className="hidden xs:inline">Photo</span>
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:bg-gray-100 text-xs sm:text-sm flex-shrink-0"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-orange-600" />
                  <span className="hidden sm:inline">Write article</span>
                  <span className="sm:hidden">Article</span>
                </Button>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={loading || !form.formState.isValid}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 text-sm sm:text-base w-full sm:w-auto"
              >
                {loading ? "Posting..." : "Post"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
