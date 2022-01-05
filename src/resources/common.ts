export abstract class Resource {
  /**
   * Unique name for the resource by type within the stack.
   *
   * This name can be used in all future references, it will be resolved automatically at runtime.
   */
  protected readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  protected abstract register(): Promise<void>
}

// This singleton helps avoid duplicate references to bucket('name')
// will return the same bucket resource
const cache: Record<string, Record<string, Resource>> = {};

type newer = <T>(name: string) => T

/**
 * Provides a new resource instance.
 *
 * @param name the _unique_ name of the resource within the stack
 * @returns the resource
 */
export const make = <T extends Resource>(T: new (name: string) => T): (name: string) => T => {
  const typename = typeof T;
  return (name: string) => {
    if (!cache[typename]) {
      cache[typename] = {};
    }
    if (!cache[typename][name]) {
      cache[typename][name] = new T(name);
      cache[typename][name]['register']();
    }

    return cache[typename][name] as T;
  }
};
