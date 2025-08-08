//Todo interface describing what properties each todo item must have
export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export type Filter = 'all' | 'active' | 'completed';
export type Theme = 'light' | 'dark';