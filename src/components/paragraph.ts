import { Components } from './Abstract';

/** 各Element付与するクラス名を定義 */
export interface ParagraphArgs {
  paragraph: string;
}

export class Paragraph extends Components {
  private _args?: ParagraphArgs;

  constructor(args?: ParagraphArgs) {
    super();
    this._args = args;
  }

  public generate() {
    return (text: string) => {
      const tag = `p`;
      const args = this._args;

      if (this.isNotUndefined(args)) {
        return this.template(tag, args.paragraph, '', text);
      } else {
        return this.template(tag, '', '', text);
      }
    };
  }
}
