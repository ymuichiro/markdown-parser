import { Components } from './Abstract';

/** 各Element付与するクラス名を定義 */
export interface LinkArgs {
  link: string;
}

export class Link extends Components {
  private _args?: LinkArgs;

  constructor(args?: LinkArgs) {
    super();
    this._args = args;
  }

  public generate() {
    return (href: string | null, title: string | null, text: string) => {
      if (href === null) return text;
      const args = this._args === undefined ? '' : this._args.link;
      let out = '<a' + 'class=' + args + ' href="' + escape(href) + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += '>' + text + '</a>';
      return out;
    };
  }
}
