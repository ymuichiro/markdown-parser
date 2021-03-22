import { Components } from './Abstract';

/** 各Element付与するクラス名を定義 */
export interface CodespanArgs {
  codespan: string;
}

export class Codespan extends Components {
  private _args?: CodespanArgs;

  constructor(args?: CodespanArgs) {
    super();
    this._args = args;
  }

  public generate() {
    return (text: string) => {
      const tag = `code`;
      const args = this._args;

      if (this.isNotUndefined(args)) {
        return this.template(tag, args.codespan, '', text);
      } else {
        return this.template(tag, '', '', text);
      }
    };
  }
}
