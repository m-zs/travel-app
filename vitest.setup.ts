import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import React from "react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
});

const NEXT_IMAGE_ONLY_PROPS = new Set([
  "priority",
  "fill",
  "placeholder",
  "blurDataURL",
  "loader",
  "quality",
  "sizes",
  "unoptimized",
]);

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    const imgProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !NEXT_IMAGE_ONLY_PROPS.has(key)),
    );

    return React.createElement("img", imgProps);
  },
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
}));
