import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import RootLayout from "./layout";

vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "--font-geist-sans" }),
  Geist_Mono: () => ({ variable: "--font-geist-mono" }),
}));

describe("RootLayout", () => {
  it("renders page content inside the document", () => {
    render(
      <RootLayout>
        <p>Travel app</p>
      </RootLayout>,
    );

    expect(screen.getByText("Travel app")).toBeInTheDocument();
  });
});
