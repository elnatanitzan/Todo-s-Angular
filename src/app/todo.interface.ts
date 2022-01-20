export interface TodoItem {
    title: string;
    id: string;
    done: boolean;
}

export interface TodoFromServer {
    userId: number;
    id: any;
    title: string;
    completed: boolean;
}