export interface ITaskTypes {
    status: string;
    id: string | number;
    dueDate: string | Date;
    title: string | undefined;
    description?: string | undefined;
}