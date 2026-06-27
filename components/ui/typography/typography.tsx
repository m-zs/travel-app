import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";

import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "font-heading text-h1 font-semibold",
      h2: "font-heading text-h2 font-semibold",
      h3: "font-heading text-h3 font-semibold",
      h4: "font-heading text-h4 font-semibold",
      h5: "font-heading text-h5 font-semibold",
      h6: "font-heading text-h6 font-semibold",
      body: "font-sans text-base leading-7",
      "body-sm": "font-sans text-sm leading-6",
      lead: "font-sans text-lg leading-8 text-muted-foreground",
      muted: "font-sans text-sm leading-6 text-muted-foreground",
      label: "font-sans text-sm font-medium leading-none",
      caption: "font-sans text-xs leading-5 text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type TypographyVariant = NonNullable<
  VariantProps<typeof typographyVariants>["variant"]
>;

const defaultElement: Record<TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  "body-sm": "p",
  lead: "p",
  muted: "p",
  label: "label",
  caption: "span",
};

function Typography({
  className,
  variant = "body",
  as,
  asChild = false,
  ...props
}: React.ComponentPropsWithoutRef<"p"> &
  VariantProps<typeof typographyVariants> & {
    as?: React.ElementType;
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : (as ?? defaultElement[variant ?? "body"]);

  return (
    <Comp
      data-slot="typography"
      data-variant={variant}
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Typography, typographyVariants };
