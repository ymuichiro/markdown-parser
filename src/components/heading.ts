import { Slugger } from 'marked';
import { Level } from '../type';
import { Components } from './Abstract';

/** 各Element付与するクラス名を定義 */
export interface HeadingsArgs {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
}

export class Heading extends Components {
  private _args?: HeadingsArgs;

  constructor(args?: HeadingsArgs) {
    super();
    this._args = args;
  }

  private clsxSelect(level: Level) {
    const _args = this._args;
    if (this.isNotUndefined(_args)) {
      switch (level) {
        case 1:
          return this.isNotUndefined(_args.h1) ? _args.h1 : '';
        case 2:
          return this.isNotUndefined(_args.h2) ? _args.h2 : '';
        case 3:
          return this.isNotUndefined(_args.h3) ? _args.h3 : '';
        case 4:
          return this.isNotUndefined(_args.h4) ? _args.h4 : '';
        case 5:
          return this.isNotUndefined(_args.h5) ? _args.h5 : '';
        case 6:
          return this.isNotUndefined(_args.h6) ? _args.h6 : '';
        default:
          return '';
      }
    } else {
      return '';
    }
  }

  public generate() {
    return (text: string, level: Level, raw: string, slugger: Slugger) => {
      const tag = `h${level}`;
      const clsx = this.clsxSelect(level);
      return this.template(tag, clsx, '', text);
    };
  }
}
