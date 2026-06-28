import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Navbar } from "./navbar";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    onClick,
    ...props
  }: React.ComponentProps<"a"> & { href: string }) => (
    <a href={href} onClick={onClick} {...props}>
      {children}
    </a>
  ),
}));

const navLabels = ["Home", "Travel", "Blogs", "Contact", "About"] as const;

describe("Navbar", () => {
  describe("visibility", () => {
    it("shows header controls and keeps the mobile sheet hidden initially", () => {
      render(<Navbar />);

      expect(screen.getByRole("img", { name: "Travel app" })).toBeVisible();
      expect(screen.getByRole("button", { name: "Open menu" })).toBeVisible();
      expect(screen.getByRole("link", { name: "Login" })).toBeVisible();
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("shows mobile navigation links when the sheet is open", async () => {
      const user = userEvent.setup();

      render(<Navbar />);

      await user.click(screen.getByRole("button", { name: "Open menu" }));

      const dialog = screen.getByRole("dialog");
      expect(dialog).toBeVisible();

      for (const label of navLabels) {
        expect(within(dialog).getByRole("link", { name: label })).toBeVisible();
      }

      expect(within(dialog).getByRole("link", { name: "Login" })).toBeVisible();
    });

    it("hides the mobile sheet after it is closed", async () => {
      const user = userEvent.setup();

      render(<Navbar />);

      await user.click(screen.getByRole("button", { name: "Open menu" }));
      expect(screen.getByRole("dialog")).toBeVisible();

      await user.click(
        within(screen.getByRole("dialog")).getByRole("link", { name: "Home" }),
      );

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  describe("mobile menu", () => {
    it("opens the mobile sheet and closes it when a nav link is clicked", async () => {
      const user = userEvent.setup();

      render(<Navbar />);

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: "Open menu" }));

      const dialog = screen.getByRole("dialog");
      expect(dialog).toBeVisible();
      await user.click(within(dialog).getByRole("link", { name: "Travel" }));

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("closes the mobile sheet when the drawer login link is clicked", async () => {
      const user = userEvent.setup();

      render(<Navbar />);

      await user.click(screen.getByRole("button", { name: "Open menu" }));

      const dialog = screen.getByRole("dialog");
      expect(dialog).toBeVisible();
      await user.click(within(dialog).getByRole("link", { name: "Login" }));

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
