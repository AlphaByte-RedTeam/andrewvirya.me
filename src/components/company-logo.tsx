"use client";
import Image from "next/image";

interface CompanyLogoProps {
  domain: string;
  className?: string;
}

export default function CompanyLogo({ domain, className }: CompanyLogoProps) {
  return (
    <Image
      src={`https://cdn.brandfetch.io/${domain}?c=1idRChWX_B1V_1cXxVw`}
      alt={`${domain} logo`}
      height={128}
      width={128}
      className={className}
      unoptimized
    />
  );
}
