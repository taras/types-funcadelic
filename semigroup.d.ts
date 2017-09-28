export interface Semigroup<T> {
  instance(
    Type: T,
    attrs: {
      append(a: T, b: T): T;
    }
  ): void;
}

export function append<T>(a: T, b: T): T;
