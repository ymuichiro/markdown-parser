import { Components } from './Abstract';

/** 各Element付与するクラス名を定義 */
export interface EmArgs {
  em: string;
}

export class Em extends Components {
  private _args?: EmArgs;

  constructor(args?: EmArgs) {
    super();
    this._args = args;
  }

  public generate() {
    return (text: string) => {
      const tag = `Em`;
      const args = this._args;

      if (this.isNotUndefined(args)) {
        return this.template(tag, args.em, '', text);
      } else {
        return this.template(tag, '', '', text);
      }
    };
  }
}
