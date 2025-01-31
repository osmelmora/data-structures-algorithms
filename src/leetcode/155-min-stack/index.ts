export class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    this.minStack.push(
      Math.min(
        val,
        this.minStack.length ? this.minStack[this.minStack.length - 1] : val,
      ),
    );
  }

  pop(): void {
    this.minStack.pop();
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.stack.length - 1];
  }
}
