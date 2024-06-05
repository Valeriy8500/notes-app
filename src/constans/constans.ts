import { CustomDescendant } from "../types/types";

export const LIST_TYPES = ["numbered-list", "bulleted-list"];
export const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

export const initialValue: CustomDescendant[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];
