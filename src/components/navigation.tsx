import Link from "next/link";
import type { NavigationProps } from "@/type/navigationProps";
import { Button } from "./ui/button";

const Navigation = ({ name, href }: NavigationProps) => {
  return (
    <Link href={href || "/"}>
      <Button
        variant="link"
        className="m-0 justify-start p-0 text-left text-primary text-sm underline"
      >
        {name || "Home"}
      </Button>
    </Link>
  );
};

export default Navigation;
