import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";
import ThemeToggler from "@/components/theme/toggler";
import Link from "next/link";
import { TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col py-4 lg:py-16 px-3">
      <div className="flex justify-between flex-wrap gap-5">
        <div className="space-y-8 lg:space-y-5 md:w-auto w-full flex flex-col md:items-start">
          <Link href="/">
            <h1 className="text-lg md:text-xl font-bold">{siteConfig.name}</h1>
          </Link>
          <div className="flex md:flex-col gap-3">
            <div className="flex items-center gap-3">
              <Button size="sm">
                <Link href="/">Get started</Link>
              </Button>
              <Button variant="outline" size="sm">
                <Link href="/about">Learn more</Link>
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Button size="sm" variant="ghost" className="size-8 p-0" asChild>
                <a href={siteConfig.links.github} target="_blank">
                  <GitHubLogoIcon />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="size-8 p-0" asChild>
                <a href={siteConfig.links.x} target="_blank">
                  <TwitterLogoIcon />
                </a>
              </Button>
              <ThemeToggler />
            </div>
          </div>
        </div>
        <div className="flex gap-12 md:w-auto w-full">
          <div className="space-y-3 text-muted-foreground flex flex-col md:items-end">
            <h1 className="text-primary">Products</h1>
            <Link
              href="/"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              Example
            </Link>
            <Link
              href="/"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              Example
            </Link>
            <Link
              href="/"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              Example
            </Link>
          </div>
          <div className="space-y-3 text-muted-foreground flex flex-col md:items-end">
            <h1 className="text-primary">Company</h1>
            <Link
              href="/about"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              About
            </Link>
            <Link
              href="/docs"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/changelog"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              Changelog
            </Link>
          </div>
        </div>
      </div>
      <Separator className="my-5" />
      <div className="flex md:justify-between flex-wrap justify-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()}{" "}
          <Link href={siteConfig.siteUrl} className="hover:underline">
            {siteConfig.name}
          </Link>
          . All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Cookies</a>
        </div>
      </div>
    </div>
  );
}
