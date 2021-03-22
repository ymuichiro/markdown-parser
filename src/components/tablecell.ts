import { Align } from '../type';
import { Components } from './Abstract';

/** 各Element付与するクラス名を定義 */
export interface TablecellArgs {
  tablecell: string;
}

export class Tablecell extends Components {
  private _args?: TablecellArgs;

  constructor(args?: TablecellArgs) {
    super();
    this._args = args;
  }

  public generate() {
    return (content: string, flags: { header: boolean; align: Align }) => {
      const type = flags.header ? 'th' : 'td';
      const tag = flags.align
        ? '<' +
          type +
          ` class=${this._args === undefined ? '' : this._args.tablecell}` +
          ' align="' +
          flags.align +
          '">'
        : '<' + type + '>';
      return tag + content + '</' + type + '>\n';
    };
  }
}
