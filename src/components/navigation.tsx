import Link from "next/link";
import type { NavigationProps } from "@/type/navigationProps";
import { Button } from "./ui/button";

const Navigation = ({ name, href }: NavigationProps) => {
  return (
    <Button
      asChild
      variant="link"
      className="m-0 justify-start p-0 text-left text-sm text-primary underline dark:text-primary-foreground"
    >
      <Link href={href || "/"}>{name || "Home"}</Link>
    </Button>
  );
};

export default Navigation;
