import { Components } from './Abstract';

/** 各Element付与するクラス名を定義 */
export interface TableArgs {
  table: string;
}

export class Table extends Components {
  private _args?: TableArgs;

  constructor(args?: TableArgs) {
    super();
    this._args = args;
  }

  public generate() {
    return (header: string, body: string) => {
      if (body) body = '<tbody>' + body + '</tbody>';
      return (
        `<table class=${this._args === undefined ? '' : this._args.table}>\n` +
        '<thead>\n' +
        header +
        '</thead>\n' +
        body +
        '</table>\n'
      );
    };
  }
}
