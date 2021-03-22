export abstract class Components {
  protected isNotUndefined<T>(value: T | undefined): value is T {
    return value !== undefined;
  }

  protected template(tag: string, clsx: string, style: string, inner: string) {
    return `<${tag} class=${clsx} style=${style}>${inner}</${tag}>`;
  }
}
