import { Components } from './Abstract';

/** 各Element付与するクラス名を定義 */
export interface ImageArgs {
  image: string;
}

export class Image extends Components {
  private _args?: ImageArgs;

  constructor(args?: ImageArgs) {
    super();
    this._args = args;
  }

  public generate() {
    return (href: string | null, title: string | null, text: string) => {
      if (href === null) return text;
      const args = this._args === undefined ? '' : this._args.image;
      let out = `<img class=${args} src="${href}" alt="${text}"`;
      if (title) out += ' title="' + title + '"';
      out += '>';
      return out;
    };
  }
}
