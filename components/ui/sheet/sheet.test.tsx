import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "./index";

describe("Sheet", () => {
  it("does not render a visible dialog when closed", () => {
    render(
      <Sheet open={false}>
        <SheetContent showCloseButton={false}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Navigation links</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.queryByText("Menu")).not.toBeInTheDocument();
  });

  it("renders optional layout primitives inside an open sheet", () => {
    render(
      <Sheet open>
        <SheetContent showCloseButton={false}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Navigation links</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose>Close</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );

    expect(screen.getByRole("dialog")).toBeVisible();
    expect(screen.getByText("Menu")).toBeVisible();
    expect(screen.getByText("Navigation links")).toBeVisible();
    expect(screen.getByRole("button", { name: "Close" })).toBeVisible();
  });
});
