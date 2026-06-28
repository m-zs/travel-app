import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/lib/utils";

function NavigationMenuLink({
  className,
  active,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      active={active}
      data-active={active ? "" : undefined}
      className={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 hover:color-brand focus-visible:ring-ring/50 flex items-center gap-2 p-2 transition-all hover:cursor-pointer hover:underline focus-visible:ring-3 focus-visible:ring-[3px] focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md data-active:underline [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

export { NavigationMenuLink };
