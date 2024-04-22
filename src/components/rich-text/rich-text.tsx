import { useCallback, useMemo } from "react";
import { Editable, withReact, useSlate, Slate, ReactEditor, RenderElementProps, RenderLeafProps } from "slate-react";
import { Editor, Transforms, createEditor, Element as SlateElement, BaseEditor } from "slate";
import { CustomBaseElement, CustomBaseTextElement, CustomSlateElement } from "../../types/types";
import { withHistory } from "slate-history";
import { LIST_TYPES, TEXT_ALIGN_TYPES } from "../../constans/constans";
import { Button, Icon, Toolbar } from "./components";

const RichText = () => {
  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);
  const editor = useMemo<ReactEditor>(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Toolbar>
        <MarkButton format="bold" icon="format_bold" />
        <MarkButton format="italic" icon="format_italic" />
        <MarkButton format="underline" icon="format_underlined" />
        <MarkButton format="code" icon="code" />
        <BlockButton format="heading-one" icon="looks_one" />
        <BlockButton format="heading-two" icon="looks_two" />
        <BlockButton format="block-quote" icon="format_quote" />
        <BlockButton format="numbered-list" icon="format_list_numbered" />
        <BlockButton format="bulleted-list" icon="format_list_bulleted" />
        <BlockButton format="left" icon="format_align_left" />
        <BlockButton format="center" icon="format_align_center" />
        <BlockButton format="right" icon="format_align_right" />
        <BlockButton format="justify" icon="format_align_justify" />
      </Toolbar>

      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Новая заметка"
        spellCheck
        autoFocus
        onKeyDown={e => {
          console.log('onKeyDown: ', e.key);
        }}
      />
    </Slate>
  );
};

const toggleBlock = (editor: BaseEditor, format: string) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  );

  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (node) => {
      const n = node as CustomSlateElement;

      return (
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        LIST_TYPES.includes(n.type) &&
        !TEXT_ALIGN_TYPES.includes(format)
      );
    },
    split: true,
  });

  let newProperties: Partial<CustomSlateElement>;

  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };
  }
  Transforms.setNodes<CustomSlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block: CustomSlateElement = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor: BaseEditor, format: string) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
};

const isBlockActive = (editor: BaseEditor, format: string, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) => {
        return !Editor.isEditor(n) && SlateElement.isElement(n) && (n as any)[blockType] === format;
      }
    })
  );

  return !!match;
};

const isMarkActive = (editor: BaseEditor, format: string) => {
  const marks: any = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element }: RenderElementProps) => {
  const el = element as CustomBaseElement;
  const style = { textAlign: el.align };

  switch (el.type) {
    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "heading-one":
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  const customLeaf = leaf as CustomBaseTextElement;

  if (customLeaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (customLeaf.code) {
    children = <code>{children}</code>;
  }

  if (customLeaf.italic) {
    children = <em>{children}</em>;
  }

  if (customLeaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

const BlockButton = ({ format, icon }:
  { format: string; icon: string }) => {
  const editor = useSlate();
  const isActive = isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? "align" : "type");

  return (
    <Button
      style={isActive ? { backgroundColor: 'blue' } : undefined}
      onMouseDown={(event: any) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

const MarkButton = ({ format, icon }:
  { format: string; icon: string }) => {
  const editor = useSlate();
  const isActive = isMarkActive(editor, format);

  return (
    <Button
      style={isActive ? { backgroundColor: 'red' } : undefined}
      onMouseDown={(event: any) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: "" }],
  },
];

export default RichText;