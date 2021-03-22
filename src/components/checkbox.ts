import { Components } from './Abstract';

/** 各Element付与するクラス名を定義 */
export interface CheckBoxArgs {
  checkbox: string;
}

export class CheckBox extends Components {
  private _args?: CheckBoxArgs;

  constructor(args?: CheckBoxArgs) {
    super();
    this._args = args;
  }

  public generate() {
    return (checked: boolean) => {
      const tag = `input`;
      const args = this._args;
      const check = checked ? "checked=''" : '';

      if (this.isNotUndefined(args)) {
        return `<input ${check} class=${args.checkbox} disabled="" type="checkbox"`;
      } else {
        return `<input ${check} disabled="" type="checkbox"`;
      }
    };
  }
}
