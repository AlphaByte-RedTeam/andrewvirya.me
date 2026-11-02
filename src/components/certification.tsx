import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import type { CertificationProps } from "@/type/certificationProps";
import { P } from "./typography";
import { Button } from "./ui/button";

const Certification = ({
  name,
  href,
  credentialId,
  issuedBy,
  issuedDate,
}: CertificationProps) => {
  return (
    <li className="flex w-full flex-col gap-1 border-l-2 border-l-muted-foreground pl-4 sm:w-auto">
      <div className="flex flex-row gap-2 items-center justify-start">
        <P>{name}</P>
        <span className="text-muted-foreground">|</span>
        <P className="text-muted-foreground">{issuedBy}</P>
      </div>
      <div className="flex flex-col gap-0.5">
        <P className="text-muted-foreground text-xs font-mono">
          {credentialId}
        </P>
        <P className="text-muted-foreground text-xs">{issuedDate}</P>
      </div>
      <Button className="w-full sm:w-auto" variant="outline" asChild>
        <Link href={href} target="_blank" rel="noopener noreferrer">
          View Certificate <ArrowUpRightIcon />
        </Link>
      </Button>
    </li>
  );
};

export default Certification;
