import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/lib/utils";

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

export { NavigationMenuItem };
