import React, { useEffect, useState } from "react";
import { useCallback, useMemo } from "react";
import { withHistory } from "slate-history";
import { LIST_TYPES, TEXT_ALIGN_TYPES, initialValue } from "../../constans/constans";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import CodeIcon from "@mui/icons-material/Code";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { selectorNotes } from "../../redux/selectors";
import { Button } from "./components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { saveNote } from "../../redux/notes";
import {
  Editor,
  Transforms,
  createEditor,
  Element as SlateElement,
  BaseEditor,
  Descendant,
} from "slate";
import {
  ICustomSlateElement,
  ICustomBaseElement,
  ICustomBaseTextElement,
  IMarkButtonProps,
  IBlockButtonProps,
  IRichTextProps,
} from "../../types/types";
import {
  Editable,
  withReact,
  useSlate,
  Slate,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
} from "slate-react";
import * as S from "./styles";

const RichText = ({ noteId }: IRichTextProps) => {
  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);
  const editor = useMemo<ReactEditor>(() => withHistory(withReact(createEditor())), []);

  const dispatch = useAppDispatch();
  const notes = useAppSelector(selectorNotes);

  const [value, setValue] = useState<any>(() => {
    const content = notes.filter(i => i.id === noteId)[0].content;
    return !content.length ? initialValue : content;
  });

  useEffect(() => {
    if (!accessSaveBtn) {
      ReactEditor.focus(editor);
    }
  }, [editor]);

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  const onSaveNote = () => {
    const noteData = { id: noteId, content: value };
    dispatch(saveNote(noteData));
  };

  const accessSaveBtn = value.length && value[0].children[0].text !== "";

  return (
    <Slate editor={editor} onChange={handleChange} initialValue={value}>
      <S.Toolbar>
        <MarkButton format="bold" icon={<FormatBoldIcon style={{ fontSize: 20 }} />} />
        <MarkButton format="italic" icon={<FormatItalicIcon style={{ fontSize: 20 }} />} />
        <MarkButton format="underline" icon={<FormatUnderlinedIcon style={{ fontSize: 20 }} />} />
        <MarkButton format="code" icon={<CodeIcon style={{ fontSize: 20 }} />} />
        <BlockButton format="heading-one" icon={<LooksOneIcon style={{ fontSize: 20 }} />} />
        <BlockButton format="heading-two" icon={<LooksTwoIcon style={{ fontSize: 20 }} />} />
        <BlockButton
          format="numbered-list"
          icon={<FormatListNumberedIcon style={{ fontSize: 20 }} />}
        />
        <BlockButton
          format="bulleted-list"
          icon={<FormatListBulletedIcon style={{ fontSize: 20 }} />}
        />
        <BlockButton format="left" icon={<FormatAlignLeftIcon style={{ fontSize: 20 }} />} />
        <BlockButton format="center" icon={<FormatAlignCenterIcon style={{ fontSize: 20 }} />} />
        <BlockButton format="right" icon={<FormatAlignRightIcon style={{ fontSize: 20 }} />} />
        <BlockButton format="justify" icon={<FormatAlignJustifyIcon style={{ fontSize: 20 }} />} />

        <S.CustomizedIconButton
          onClick={onSaveNote}
          title="Сохранить"
          disabled={accessSaveBtn ? false : true}
        >
          <CheckCircleIcon
            style={{ fontSize: 25 }}
            color={accessSaveBtn ? "success" : "action"}
          />
        </S.CustomizedIconButton>
      </S.Toolbar>

      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Новая заметка"
        spellCheck
        onKeyDown={() => {
          // console.log('onKeyDown: ', e.key);
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
    match: node => {
      const n = node as ICustomSlateElement;

      return (
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        LIST_TYPES.includes(n.type) &&
        !TEXT_ALIGN_TYPES.includes(format)
      );
    },
    split: true,
  });

  let newProperties: Partial<ICustomSlateElement>;

  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };
  }
  Transforms.setNodes<ICustomSlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block: ICustomSlateElement = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor: BaseEditor, format: string) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isBlockActive = (editor: BaseEditor, format: string, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n => {
        return !Editor.isEditor(n) && SlateElement.isElement(n) && (n as any)[blockType] === format;
      },
    })
  );

  return !!match;
};

const isMarkActive = (editor: BaseEditor, format: string) => {
  const marks: any = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element }: RenderElementProps) => {
  const el = element as ICustomBaseElement;
  const style = { textAlign: el.align };

  switch (el.type) {
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
  const customLeaf = leaf as ICustomBaseTextElement;

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

const MarkButton = ({ format, icon }: IMarkButtonProps) => {
  const editor = useSlate();

  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <S.Icon>{icon}</S.Icon>
    </Button>
  );
};

const BlockButton = ({ format, icon }: IBlockButtonProps) => {
  const editor = useSlate();

  return (
    <Button
      active={isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? "align" : "type")}
      onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <S.Icon>{icon}</S.Icon>
    </Button>
  );
};

export default RichText;
