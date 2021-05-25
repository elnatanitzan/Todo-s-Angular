export interface TodoItem {
    title: string;
    id: string;
    done: boolean;
}

export interface TodoFromServer {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}