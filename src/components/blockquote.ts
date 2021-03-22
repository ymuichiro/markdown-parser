import { Components } from './Abstract';

/** 各Element付与するクラス名を定義 */
export interface BlockquoteArgs {
  blockquote: string;
}

export class Blockquote extends Components {
  private _args?: BlockquoteArgs;

  constructor(args?: BlockquoteArgs) {
    super();
    this._args = args;
  }

  public generate() {
    return (quote: string) => {
      const tag = `blockquote`;
      const args = this._args;

      if (this.isNotUndefined(args)) {
        return this.template(tag, args.blockquote, '', '\n' + quote);
      } else {
        return this.template(tag, '', '', '\n' + quote);
      }
    };
  }
}
