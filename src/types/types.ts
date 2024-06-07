import { ReactElement } from "react";
import { Element as SlateElement, BaseElement, BaseText } from "slate";

export type CustomDescendant = ICustomBaseTextElement | ICustomBaseElement;

export interface INoteDataForPayloadAction {
  id: string;
  content: CustomDescendant[];
}

export interface INote {
  id: string;
  noteName: string;
  currDateTime: string;
  isSelected: boolean;
  content: CustomDescendant[];
}

export interface IInitialState {
  elements: INote[];
  confirmDeleteModalState: boolean;
}

export interface ICustomSlateElement extends SlateElement {
  type: string;
  align?: string;
}

export interface ICustomBaseElement extends BaseElement {
  type?: string;
  align?: any | undefined;
}

export interface ICustomBaseTextElement extends BaseText {
  children?: any;
  bold?: string;
  code?: string;
  italic?: string;
  underline?: string;
}

export interface IMarkButtonProps {
  format: string;
  icon: ReactElement;
}

export interface IBlockButtonProps {
  format: string;
  icon: ReactElement;
}

export interface IRichTextProps {
  noteId: string;
}

export interface BaseProps {
  [key: string]: unknown;
}
