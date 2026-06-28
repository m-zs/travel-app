import { Dialog as SheetPrimitive } from "radix-ui";
import * as React from "react";

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

export { SheetTrigger };
