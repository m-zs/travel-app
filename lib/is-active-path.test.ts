import { describe, expect, it } from "vitest";

import { isActivePath } from "./is-active-path";

describe("isActivePath", () => {
  it("matches home only on root path", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/travel", "/")).toBe(false);
  });

  it("matches section paths and nested routes", () => {
    expect(isActivePath("/travel", "/travel")).toBe(true);
    expect(isActivePath("/travel/paris", "/travel")).toBe(true);
    expect(isActivePath("/travel", "/blogs")).toBe(false);
  });
});
