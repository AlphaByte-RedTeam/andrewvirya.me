import Link from "next/link";
import type { NavigationProps } from "@/type/navigationProps";
import { Button } from "./ui/button";

const Navigation = ({ name, href }: NavigationProps) => {
  return (
    <Link className="w-full sm:w-auto" href={href || "/"}>
      <Button
        variant="link"
        className="m-0 w-full justify-start p-0 text-left text-primary text-sm underline sm:w-auto"
      >
        {name || "Home"}
      </Button>
    </Link>
  );
};

export default Navigation;
