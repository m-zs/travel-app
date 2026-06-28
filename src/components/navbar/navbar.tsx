"use client";

import { Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { isActivePath } from "@/lib/is-active-path";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Travel", href: "/travel" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
] as const;

function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-background border-border border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:grid md:grid-cols-[1fr_auto_1fr] md:px-6">
        <div className="flex items-center gap-2 md:justify-self-start">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/globe.svg" alt="Travel app" width={32} height={32} />
          </Link>
        </div>

        <NavigationMenu className="hidden max-w-max flex-none md:flex md:justify-self-center">
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
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="mr-2">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu strokeWidth={3} width={24} height={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle hidden />
              </SheetHeader>
              <nav className="flex w-full flex-col gap-1 px-4">
                {navItems.map((item) => {
                  const active = isActivePath(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => {
                        setMobileOpen(false);
                      }}
                      className={cn(
                        "block w-full rounded-lg px-3 py-2 text-center text-base font-medium transition-colors",
                        active && "text-brand",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <Button asChild className="mt-2 w-full">
                  <Link
                    href="/login"
                    onClick={() => {
                      setMobileOpen(false);
                    }}
                  >
                    Login
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

          <Button
            asChild
            className="size-9 shrink-0 px-0 md:h-9 md:w-auto md:px-6"
          >
            <Link
              href="/login"
              aria-label="Login"
              className="inline-flex items-center justify-center"
            >
              <User className="md:hidden" strokeWidth={3} />
              <span className="hidden md:inline">Login</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export { Navbar };
