import marked, { Slugger } from 'marked';
import { BlockquoteArgs, Blockquote } from './components/blockquote';
import { CheckBox, CheckBoxArgs } from './components/checkbox';
import { Code, CodeArgs } from './components/code';
import { Codespan, CodespanArgs } from './components/codespan';
import { Del, DelArgs } from './components/del';
import { Em, EmArgs } from './components/em';
import { Heading, HeadingsArgs } from './components/heading';
import { ImageArgs, Image } from './components/image';
import { Link, LinkArgs } from './components/link';
import { List, ListArgs } from './components/list';
import { Listitem, ListitemArgs } from './components/listitem';
import { Paragraph, ParagraphArgs } from './components/paragraph';
import { Strong, StrongArgs } from './components/strong';
import { Table, TableArgs } from './components/table';
import { Tablecell, TablecellArgs } from './components/tablecell';

/** 各Element付与するクラス名を定義 */
export interface MarkedArgs {
  heading: HeadingsArgs;
  blockquote: BlockquoteArgs;
  checkbox: CheckBoxArgs;
  codespan: CodespanArgs;
  code: CodeArgs;
  del: DelArgs;
  em: EmArgs;
  image: ImageArgs;
  link: LinkArgs;
  list: ListArgs;
  listitem: ListitemArgs;
  paragraph: ParagraphArgs;
  strong: StrongArgs;
  table: TableArgs;
  tablecell: TablecellArgs;
}

export function customMarked(args: Partial<MarkedArgs>) {
  marked.use({
    renderer: {
      heading: new Heading(args.heading).generate(),
      blockquote: new Blockquote(args.blockquote).generate(),
      br: () => '<br>',
      checkbox: new CheckBox(args.checkbox).generate(),
      codespan: new Codespan(args.codespan).generate(),
      code: new Code(args.code).generate(),
      del: new Del(args.del).generate(),
      em: new Em(args.em).generate(),
      hr: () => '<hr>\n',
      html: (_html: string) => _html,
      image: new Image(args.image).generate(),
      link: new Link(args.link).generate(),
      list: new List(args.list).generate(),
      listitem: new Listitem(args.listitem).generate(),
      paragraph: new Paragraph(args.paragraph).generate(),
      strong: new Strong(args.strong).generate(),
      table: new Table(args.table).generate(),
      tablecell: new Tablecell(args.tablecell).generate(),
      tablerow: (content: string) => '<tr>\n' + content + '</tr>\n',
      text: (_text: string) => _text,
      options: {},
    },
  });

  return marked;
}
