export interface Filterable<T> {
  instance(
    Type: T,
    attrs: {
      filter(fn: (value: any) => boolean, filterable: T): T;
    }
  ): void;
}

export function filter<T>(fn: (value: any) => boolean, filterable: T): T;