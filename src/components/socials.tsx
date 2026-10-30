import Link from "next/link";
import { Button } from "./ui/button";
import { SocialsProps } from "@/type/socialsProps";

const Socials = ({ socialUrl, name, handle }: SocialsProps) => {
  return (
    <Link
      href={`${socialUrl}/${handle}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{name}</span>
      <Button variant="outline" className="flex items-center w-9 h-9 p-0">
        {name}
      </Button>
    </Link>
  );
};

export default Socials;
