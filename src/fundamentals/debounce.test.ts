import { describe, test, expect } from "bun:test";
import { debounce } from "./debounce";

describe("debounce", () => {
  test("should debounce function calls", async () => {
    let value = 0;
    const increment = (amount: number) => (value += amount);
    const debouncedFn = debounce(increment, 100);

    debouncedFn(5);
    debouncedFn(6);
    debouncedFn(10);

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(value).toEqual(10);
  });
});
