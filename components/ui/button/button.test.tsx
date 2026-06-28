import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./button";

describe("Button", () => {
  it("renders a visible button with default variant and size", () => {
    render(<Button>Book now</Button>);

    const button = screen.getByRole("button", { name: "Book now" });

    expect(button).toBeVisible();
    expect(button).toHaveAttribute("data-slot", "button");
    expect(button).toHaveAttribute("data-variant", "default");
    expect(button).toHaveAttribute("data-size", "default");
  });

  it.each([
    ["secondary", "secondary"],
    ["ghost", "ghost"],
    ["destructive", "destructive"],
    ["link", "link"],
  ] as const)("renders the %s variant", (variant, expected) => {
    render(<Button variant={variant}>{variant}</Button>);

    expect(screen.getByRole("button", { name: variant })).toHaveAttribute(
      "data-variant",
      expected,
    );
  });

  it.each([
    ["sm", "sm"],
    ["lg", "lg"],
    ["icon", "icon"],
  ] as const)("renders the %s size", (size, expected) => {
    render(
      <Button size={size} aria-label={size}>
        {size}
      </Button>,
    );

    expect(screen.getByRole("button", { name: size })).toHaveAttribute(
      "data-size",
      expected,
    );
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Click me</Button>);

    await user.click(screen.getByRole("button", { name: "Click me" }));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it("stays disabled and does not call onClick", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button disabled onClick={onClick}>
        Click me
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Click me" });

    expect(button).toBeDisabled();
    expect(button).toBeVisible();

    await user.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders as a child element when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/trips">View trips</a>
      </Button>,
    );

    const link = screen.getByRole("link", { name: "View trips" });

    expect(link).toBeVisible();
    expect(link).toHaveAttribute("data-slot", "button");
    expect(link).toHaveAttribute("data-variant", "default");
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("merges custom class names", () => {
    render(<Button className="custom-class">Styled</Button>);

    expect(screen.getByRole("button", { name: "Styled" })).toHaveClass(
      "custom-class",
    );
  });
});
