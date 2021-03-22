import { Components } from './Abstract';

/** 各Element付与するクラス名を定義 */
export interface ListArgs {
  list: string;
}

export class List extends Components {
  private _args?: ListArgs;

  constructor(args?: ListArgs) {
    super();
    this._args = args;
  }

  public generate() {
    return (body: string, ordered: boolean, start: number) => {
      const args = this._args === undefined ? '' : this._args.list;
      const type = ordered ? 'ol' : 'ul',
        startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
      const c = ` class="${args}"`;
      return '<' + type + startatt + c + '>\n' + body + '</' + type + '>\n';
    };
  }
}
