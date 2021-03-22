import { Components } from './Abstract';

/** 各Element付与するクラス名を定義 */
export interface StrongArgs {
  strong: string;
}

export class Strong extends Components {
  private _args?: StrongArgs;

  constructor(args?: StrongArgs) {
    super();
    this._args = args;
  }

  public generate() {
    return (text: string) => {
      const tag = `p`;
      const args = this._args;

      if (this.isNotUndefined(args)) {
        return this.template(tag, args.strong, '', text);
      } else {
        return this.template(tag, '', '', text);
      }
    };
  }
}
