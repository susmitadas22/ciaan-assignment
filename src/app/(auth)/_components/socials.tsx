import { AppleIcon, GoogleIcon, MetaIcon } from "~/components/icons";

export const socials: Array<{
  name: "google" | "apple" | "meta";
  label: string;
  icon: React.FC;
}> = [
  {
    name: "apple",
    label: "Apple",
    icon: AppleIcon,
  },
  {
    name: "google",
    label: "Google",
    icon: GoogleIcon,
  },
  {
    name: "meta",
    label: "Meta",
    icon: MetaIcon,
  },
];
