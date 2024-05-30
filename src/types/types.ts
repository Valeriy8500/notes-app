import { Element as SlateElement, BaseElement, BaseText } from "slate";

export type noteContent = Array<{
  children: Array<{ [key: string]: any }>;
  type: string;
  [key: string]: any;
}>;

export interface INote {
  id: string;
  noteName: string;
  currDateTime: string;
  isSelected: boolean;
  content: noteContent;
}

export interface IInitialState {
  elements: INote[];
}

export interface ICustomSlateElement extends SlateElement {
  type: string;
  align?: string;
}

export interface ICustomBaseElement extends BaseElement {
  type: string;
  align?: any | undefined;
}

export interface ICustomBaseTextElement extends BaseText {
  bold: string;
  code: string;
  italic: string;
  underline: string;
}

export interface IMarkButtonProps {
  format: string;
  icon: any;
}

export interface IBlockButtonProps {
  format: string;
  icon: any;
}

export interface IRichTextProps {
  noteId: string;
}
