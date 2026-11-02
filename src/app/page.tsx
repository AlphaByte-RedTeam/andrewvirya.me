import {
  ArrowRightIcon,
  BugIcon,
  CrosshairIcon,
  DownloadIcon,
  MailIcon,
  RadarIcon,
} from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import Certification from "@/components/certification";
import CompanyLogo from "@/components/company-logo";
import ConsoleBanner from "@/components/console-banner";
import InteractiveMotion from "@/components/interactive-motion";
import Navigation from "@/components/navigation";
import Reveal from "@/components/reveal";
import Socials from "@/components/socials";
import ThemeSwitcher from "@/components/theme-switcher";
import { H1, H2, P } from "@/components/typography";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CERTIFICATIONS } from "@/data/certifications";
import { CTF_PLATFORMS } from "@/data/ctfPlatforms";
import { NAVIGATION } from "@/data/navigations";
import { SOCIALS } from "@/data/socials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background font-sans">
      <Link
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-foreground focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-ring"
      >
        Skip to content
      </Link>
      <ConsoleBanner />
      <main
        id="main-content"
        className="flex w-full max-w-3xl flex-1 flex-col items-start justify-between gap-16 bg-background px-4 py-16 sm:items-start sm:px-16 sm:py-32"
      >
        <Reveal>
          <div className="flex w-full items-start justify-between gap-4">
            <nav className="flex items-center gap-2">
              {NAVIGATION.map((nav, idx) => (
                <Fragment key={nav.name}>
                  <Navigation name={nav.name} href={nav.href} />
                  {idx < NAVIGATION.length - 1 && (
                    <span className="text-muted-foreground" aria-hidden="true">
                      /
                    </span>
                  )}
                </Fragment>
              ))}
            </nav>
            <ThemeSwitcher />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:items-start">
            <div className="flex flex-col items-start gap-1">
              <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-center">
                <H1>Andrew Virya Victorio</H1>
                <span className="mx-2 hidden text-muted-foreground sm:inline">
                  |
                </span>
                <P className="font-mono text-lg">dedgh0st</P>
              </div>
              <P className="font-inter text-muted-foreground text-sm">
                Offensive Security Practitioner
              </P>
            </div>
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <InteractiveMotion className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto" asChild>
                  <Link
                    href="https://docs.google.com/document/d/1jtaCuy1BtGAulHfWWZGrK1CmZZNyTcsM90C-WDt4v4o/export?format=pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadIcon />
                    Download Resume
                  </Link>
                </Button>
              </InteractiveMotion>
              <InteractiveMotion className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto" variant="outline" asChild>
                  <Link href="mailto:avv03@protonmail.com">
                    <MailIcon />
                    Email
                  </Link>
                </Button>
              </InteractiveMotion>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <section
            id="about-me"
            className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:items-start"
          >
            <div className="flex flex-col items-start gap-4">
              <Link href="#about-me">
                <H2 className="underline">About Me</H2>
              </Link>
              <div className="flex flex-col gap-1 items-start">
                <P>I break systems legally for a living.</P>
                <P>Solving CTF challenges in my free time.</P>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">
                  <BugIcon aria-hidden="true" />
                  Web App Security
                </Badge>
                <Badge variant="outline">
                  <RadarIcon aria-hidden="true" />
                  Vulnerability Assessment
                </Badge>
                <Badge variant="outline">
                  <CrosshairIcon aria-hidden="true" />
                  Penetration Testing
                </Badge>
              </div>
            </div>
            <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
              <InteractiveMotion className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto" variant="outline" asChild>
                  <Link href="/about" target="_blank" rel="noopener noreferrer">
                    More About Me
                    <ArrowRightIcon />
                  </Link>
                </Button>
              </InteractiveMotion>
            </div>
          </section>
        </Reveal>
        <Reveal delay={0.05}>
          <section
            id="ctf"
            className="flex w-full flex-col items-start gap-4 sm:w-auto"
          >
            <Link href="#ctf">
              <H2 className="underline">CTF</H2>
            </Link>
            <P>
              Sharpening my cyber security skills in safe and controlled
              environments.
            </P>
            <div className="grid w-full grid-cols-5 gap-4 sm:w-auto">
              {CTF_PLATFORMS.map((platform) => (
                <InteractiveMotion key={platform.href}>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${platform.name}`}
                        className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        <Avatar className="size-12">
                          <CompanyLogo
                            domain={platform.domain}
                            className="size-full rounded-full object-contain p-1"
                          />
                        </Avatar>
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit">
                      <P>{platform.name}</P>
                    </HoverCardContent>
                  </HoverCard>
                </InteractiveMotion>
              ))}
            </div>
          </section>
        </Reveal>
        <Reveal delay={0.05}>
          <section
            id="articles-media"
            className="flex w-full flex-col items-start gap-4 sm:w-auto"
          >
            <Link href="#articles-media">
              <H2 className="underline">Other Activity</H2>
            </Link>
            <P className="w-full sm:w-sm">
              Writing CTF write-ups and security breakdowns on{" "}
              <Link
                href="https://medium.com/@dedgh0st"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Medium
              </Link>
              , plus sharing bite-sized cybersec content on{" "}
              <Link
                href="https://www.tiktok.com/@andrewvirya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                TikTok.
              </Link>
            </P>
          </section>
        </Reveal>
        <Reveal delay={0.05}>
          <section
            id="socials"
            className="flex w-full flex-col items-start gap-4 sm:w-auto"
          >
            <Link href="#socials">
              <H2 className="underline">Socials</H2>
            </Link>
            <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto">
              {SOCIALS.map((social) => (
                <Socials
                  key={social.name}
                  handle={social.handle}
                  name={social.name}
                  socialUrl={social.socialUrl}
                />
              ))}
            </div>
          </section>
        </Reveal>
        <Reveal delay={0.05}>
          <section
            id="certifications"
            className="flex w-full flex-col items-start gap-4 sm:w-auto"
          >
            <Link href="#certifications">
              <H2 className="underline">Certifications</H2>
            </Link>
            <ul className="flex w-full flex-col gap-4 sm:w-auto">
              {CERTIFICATIONS.map((certification) => (
                <Certification
                  key={certification.name}
                  name={certification.name}
                  href={certification.href}
                  credentialId={certification.credentialId}
                  issuedBy={certification.issuedBy}
                  issuedDate={certification.issuedDate}
                  expirationDate={certification.expirationDate}
                />
              ))}
            </ul>
          </section>
        </Reveal>
      </main>
      <footer className="flex flex-col w-full max-w-3xl items-center border-t px-4 py-6 text-sm text-muted-foreground sm:px-16">
        <pre
          role="img"
          aria-label="dedghost text art"
          className="mb-6 w-full whitespace-pre font-mono text-[clamp(0.55rem,2.7vw,1.25rem)] leading-tight"
        >
          {[
            "▗▄▄▄  ▗▞▀▚▖   ▐▌ ▗▄▄▖▐▌   ▄▀▀▚▖ ▄▄▄  ■",
            "▐▌  █ ▐▛▀▀▘   ▐▌▐▌   ▐▌   █  ▐▌▀▄▄▗▄▟▙▄▖",
            "▐▌  █ ▝▚▄▄▖▗▞▀▜▌▐▌▝▜▌▐▛▀▚▖█  ▐▌▄▄▄▀ ▐▌",
            "▐▙▄▄▀      ▝▚▄▟▌▝▚▄▞▘▐▌ ▐▌▀▄▄▞▘     ▐▌",
            "                                    ▐▌",
          ].join("\n")}
        </pre>
        <div className="flex w-full items-center justify-between">
          <p>© 2026 Andrew Virya Victorio</p>
          <Link
            href="#main-content"
            className="underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Back to top ↑
          </Link>
        </div>
      </footer>
    </div>
  );
}
