import Link from "next/link";
import BackButton from "@/components/back-button";
import { H1, P } from "@/components/typography";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center bg-neutral-100 px-4 py-16">
      <div className="flex flex-col items-center gap-4 text-center">
        <H1 className="text-2xl sm:text-4xl">404 | Page Not Found</H1>
        <P>The page you&apos;re looking for isn&apos;t here.</P>
        <div className="flex flex-col justify-center gap-2 sm:flex-row">
          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
          <BackButton />
        </div>
      </div>
    </main>
  );
}
