import { Metadata } from "next";
import { LoginForm } from "../_components";

export const metadata: Metadata = { title: "Sign In" };

export default function Page() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
