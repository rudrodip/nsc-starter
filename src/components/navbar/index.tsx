"use client";

import { marketingConfig } from "@/config/marketing.config";
import { siteConfig } from "@/config/site.config";
import type { NavItem } from "@/types";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import ThemeToggler from "@/components/theme/toggler";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import MobileNav from "./mobile";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full max-w-5xl bg-secondary/50 backdrop-blur-md backdrop-saturate-150 px-3 py-2 md:rounded-lg">
      <div className="flex items-center gap-2">
        <MobileNav />
        <Link href="/">
          <h1 className="font-heading font-semibold">{siteConfig.name}</h1>
        </Link>
        <div className="items-center gap-2 hidden md:flex">
          {marketingConfig.defaultNavbar.map((item) => (
            <NavItemComponent
              key={item.title}
              title={item.title}
              href={item.href}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-2">
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
        </div>
        <ThemeToggler />
      </div>
    </nav>
  );
}

export const NavItemComponent = ({ title, href }: NavItem) => {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <p
        className={cn(
          "text-sm px-2 py-1 duration-100 transition-all ease-out rounded cursor-pointer",
          pathname === href
            ? "text-background bg-primary"
            : "text-muted-foreground hover:bg-secondary"
        )}
      >
        {title}
      </p>
    </Link>
  );
};
