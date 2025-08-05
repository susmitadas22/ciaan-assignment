import { Metadata } from "next";
import { RegisterForm } from "../_components";

export const metadata: Metadata = { title: "Sign Up" };

export default function Page() {
  return (
    <div>
      <RegisterForm />
    </div>
  );
}
