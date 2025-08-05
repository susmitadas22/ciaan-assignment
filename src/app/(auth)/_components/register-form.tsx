"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { PasswordInput } from "~/components/ui/password-input";
import { toast } from "sonner";
import { authClient } from "~/lib/auth-client";

const registerSchema = z.object({
  email: z.email(),
  password: z.string(),
});

type LoginPayload = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const [loading, setLoading] = React.useState(false);
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { email: "", password: "" },
  });
  const router = useRouter();

  const onSubmit = async (data: LoginPayload) => {
    await authClient.signUp.email({
      email: data.email,
      name: data.email.split("@")[0] || "User",
      password: data.password,
      fetchOptions: {
        onSuccess: () => router.push("/"),
        onRequest: () => setLoading(true),
        onResponse: () => setLoading(false),
        onError: (error: any) => {
          toast.error(error.message);
        },
      },
    });
  };

  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Get Started</h1>
          <p className="text-balance text-muted-foreground">
            Get started by creating an account
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="hi@sushh.me"
                      autoCapitalize="off"
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder="********"
                      autoComplete="current-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={loading}>
              create account
            </Button>
          </form>
        </Form>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href={"/sign-in"} className="underline underline-offset-4">
            Login Instead
          </Link>
        </div>
      </div>
    </div>
  );
};
