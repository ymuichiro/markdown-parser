import { Components } from './Abstract';

/** 各Element付与するクラス名を定義 */
export interface ListitemArgs {
  listitem: string;
}

export class Listitem extends Components {
  private _args?: ListitemArgs;

  constructor(args?: ListitemArgs) {
    super();
    this._args = args;
  }

  public generate() {
    return (text: string) => {
      const tag = `li`;
      const args = this._args;

      if (this.isNotUndefined(args)) {
        return this.template(tag, args.listitem, '', text);
      } else {
        return this.template(tag, '', '', text);
      }
    };
  }
}
