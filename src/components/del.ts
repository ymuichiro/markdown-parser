import { Components } from './Abstract';

/** 各Element付与するクラス名を定義 */
export interface DelArgs {
  del: string;
}

export class Del extends Components {
  private _args?: DelArgs;

  constructor(args?: DelArgs) {
    super();
    this._args = args;
  }

  public generate() {
    return (text: string) => {
      const tag = `del`;
      const args = this._args;

      if (this.isNotUndefined(args)) {
        return this.template(tag, args.del, '', text);
      } else {
        return this.template(tag, '', '', text);
      }
    };
  }
}
