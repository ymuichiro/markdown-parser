import { Components } from './Abstract';

/** 各Element付与するクラス名を定義 */
export interface CodeArgs {
  code: string;
}

export class Code extends Components {
  private _args?: CodeArgs;

  constructor(args?: CodeArgs) {
    super();
    this._args = args;
  }

  public generate() {
    return (text: string) => {
      const args = this._args;

      if (this.isNotUndefined(args)) {
        return `<pre><code class=${this._args.code}>` + text + '</code></pre>\n';
      } else {
        return `<pre><code>` + text + '</code></pre>\n';
      }
    };
  }
}
