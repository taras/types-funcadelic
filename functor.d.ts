export interface Functor<T> {
  instance(
    Type: T,
    attr: {
      map(fn: (value: any) => any): T;
    }
  ): void;
}

export function map<T>(fn: (value: any) => any, functor: T): T;
