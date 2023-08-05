
export interface ITaskTypes {
    status: string;
    id: string | number;
    dueDate: string | Date;
    title: string | undefined;
    description?: string | undefined;
}

export interface IStatusTypes { status: string; icon: string }

// Reducer Slice Types --------------------------------------Data Types
export interface IInitialState {
    date: string;
    todo: ITaskTypes;
    todos: ITaskTypes[];
}