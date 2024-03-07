export type noteContent = { [key: string]: any };

export interface INote {
    id: string;
    noteName: string;
    currDateTime: string;
    content: noteContent;
}

