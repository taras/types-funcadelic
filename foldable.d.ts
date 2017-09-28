export interface Foldable<T> {
  instance(
    Type: T,
    attrs: {
      foldr(fn: (acc: any, value: any) => any, initial: any, foldable: T): any;
      foldl(fn: (acc: any, value: any) => any, initial: any, foldable: T): any;
    }
  ): void;
}

export function foldr<T>(fn: (acc: any, value: any) => any, initial: any, foldable: T): any;
export function foldl<T>(fn: (acc: any, value: any) => any, initial: any, foldable: T): any;
export function length<T>(foldable: T): number;
