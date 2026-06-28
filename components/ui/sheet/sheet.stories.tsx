import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./index";

const meta = {
  title: "UI/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your account here. Click save when you are done.
          </SheetDescription>
        </SheetHeader>
        <div className="text-muted-foreground px-4 text-sm">
          Profile fields and form content would go here.
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open sheet</Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[min(100%,20rem)]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {["Home", "Travel", "Blogs", "Contact", "About"].map((label) => (
            <Button
              key={label}
              variant="ghost"
              className="justify-start font-medium"
            >
              {label}
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Confirm booking</SheetTitle>
          <SheetDescription>
            Review your trip details before completing checkout.
          </SheetDescription>
        </SheetHeader>
        <div className="px-4 text-sm">
          <p>Barcelona · 5 nights · 2 guests</p>
          <p className="mt-2 font-medium">Total: $1,240</p>
        </div>
        <SheetFooter>
          <Button variant="secondary">Cancel</Button>
          <Button>Confirm</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const AllSides: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex flex-wrap gap-3">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="secondary">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className="capitalize">{side} sheet</SheetTitle>
              <SheetDescription>
                Drawer slides in from the {side}.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  ),
};
