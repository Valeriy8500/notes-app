import { Element as SlateElement, BaseElement, BaseText } from "slate";

export type noteContent = { [key: string]: any };

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

export interface CustomSlateElement extends SlateElement {
  type: string;
  align?: string;
}

export interface CustomBaseElement extends BaseElement {
  type: string;
  align?: any | undefined;
}

export interface CustomBaseTextElement extends BaseText {
  bold: string;
  code: string;
  italic: string;
  underline: string;
}
