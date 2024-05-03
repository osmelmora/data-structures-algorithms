import { test, expect, jest } from "bun:test";

import { throttle } from "./throttle";

test("throttle: should call the callback only once", async () => {
  const callback = jest.fn();
  const throttledCallback = throttle(callback, 100);

  throttledCallback();
  throttledCallback();
  throttledCallback();
  throttledCallback();

  await new Promise((resolve) => setTimeout(resolve, 100));

  expect(callback).toHaveBeenCalledTimes(1);
});
