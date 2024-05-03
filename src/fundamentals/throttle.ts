export function throttle(callback: Function, waitTime: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (...args: any[]) {
    if (timer === null) {
      timer = setTimeout(() => {
        callback(...args);
        timer = null;
      }, waitTime);
    }
  };
}
