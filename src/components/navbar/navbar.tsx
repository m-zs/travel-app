"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { isActivePath } from "@/lib/is-active-path";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Travel", href: "/travel" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
] as const;

function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-background border-border border-b">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6">
        <div className="flex items-center justify-self-start">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/globe.svg" alt="Travel app" width={32} height={32} />
          </Link>
        </div>

        <NavigationMenu className="max-w-max flex-none justify-self-center">
          <NavigationMenuList>
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild active={active}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center justify-self-end">
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export { Navbar };
