import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { marketingConfig } from "@/config/marketing.config";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavItemComponent } from ".";
import ThemeToggler from "@/components/theme/toggler";
import { Separator } from "@/components/ui/separator";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <HamburgerMenuIcon />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="w-full text-left mb-2">
            <Link href="/">
              <h1 className="text-lg md:text-xl font-bold">
                {siteConfig.name}
              </h1>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2">
          {marketingConfig.defaultNavbar.map((item) => (
            <NavItemComponent
              key={item.title}
              title={item.title}
              href={item.href}
            />
          ))}
        </div>
        <Separator className="my-2" />
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="rounded-full" asChild>
            <a href={siteConfig.links.github} target="_blank">
              <GitHubLogoIcon />
            </a>
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full" asChild>
            <a href={siteConfig.links.x} target="_blank">
              <TwitterLogoIcon />
            </a>
          </Button>
          <ThemeToggler />
        </div>
      </SheetContent>
    </Sheet>
  );
}
