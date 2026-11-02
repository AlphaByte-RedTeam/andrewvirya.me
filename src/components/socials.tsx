import Link from "next/link";
import type { SocialsProps } from "@/type/socialsProps";
import { P } from "./typography";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const Socials = ({ socialUrl, name, handle }: SocialsProps) => {
  const domain = new URL(socialUrl).hostname
    .replace(/^www\./i, "")
    .replace(/\.com$/i, "");
  const displayName = domain.charAt(0).toUpperCase() + domain.slice(1);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          asChild
          variant="outline"
          className="flex h-9 w-full items-center p-0 sm:w-9"
        >
          <Link
            href={`${socialUrl}/${handle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{displayName}</span>
            {name}
          </Link>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit">
        <P>{displayName}</P>
      </HoverCardContent>
    </HoverCard>
  );
};

export default Socials;
