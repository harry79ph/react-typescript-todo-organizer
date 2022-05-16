export interface Item {
    className: string;
    title: string;
    content: string;
    isActive: boolean;
}

export interface Items {
    candos: Item[];
    todos: Item[];
}

export type StateSetterType = React.Dispatch<React.SetStateAction<Item[]>>;