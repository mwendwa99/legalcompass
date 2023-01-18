import Banner from "../Banner";
import { beforeEach, describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Banner", () => {
  beforeEach(() => {
    render(<Banner banner={{ title: "test", subtitle: "test" }} />);
  });

  test("renders banner", () => {
    expect(screen.getByRole("banner")).toBeTruthy();
  });

  test("renders banner with title", () => {
    expect(screen.getByRole("banner")).toHaveTextContent("test");
  });

  test("renders banner with subtitle", () => {
    expect(screen.getByRole("banner")).toHaveTextContent("test");
  });

  //   banner contains a button
  test("banner contains a button", () => {
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
