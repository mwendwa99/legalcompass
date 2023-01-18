import Button from "../Button";
import { beforeEach, test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  beforeEach(() => {
    render(<Button title="test" type="primary" />);
  });

  test("renders button", () => {
    expect(screen.getByRole("button")).toBeTruthy();
  });

  test("renders button with title", () => {
    expect(screen.getByRole("button")).toHaveTextContent("test");
  });

  test("renders button with type", () => {
    expect(screen.getByRole("button")).toHaveClass(
      "MuiButton-containedPrimary"
    );
  });

  //   button is clickable
  test("button is clickable", () => {
    const button = screen.getByRole("button");
    expect(button).toBeEnabled();
    expect(button).toBeVisible();
  });
});
