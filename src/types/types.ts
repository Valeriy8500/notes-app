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

