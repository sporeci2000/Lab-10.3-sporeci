//Import React hooks needed for context creation and state management
import { createContext, useState, useContext, useEffect } from 'react';
import type { Todo } from '../types/types';

//Define the shape of the context value
interface TodoContextType {
    todos: Todo[]; //array of todo items
    addTodo: (text: string) => void;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    editTodo: (id: string, newText: string) => void;
    clearCompleted: () => void;
}

//Create the actual context with undefined initial value
const TodoContext = createContext<TodoContextType | undefined>(undefined);


//This component will provide todo state and actions to its child components
export function TodoProvider(props: any) {

    //Initialize todos state from localStorage if available, otherwise empty array
    const [todos, setTodos] = useState<Todo[]>(() => {
        const stored = localStorage.getItem('todos');
        return stored ? JSON.parse(stored) : [];
    });

    //Every time todos state changes, update the localStorage to persist it
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    //Function to add a new todo with unique id, given text, and completed false
    function addTodo(text: string) {
        setTodos(prev => [...prev, { id: Date.now().toString(), text, completed: false }]);
    }


    //Function to toggle the completed flag on a todo by id
    function toggleTodo(id: string) {
        setTodos(prev =>
            prev.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        );
    }


    //Function to delete a todo by filtering it out from the list
    function deleteTodo(id: string) {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }


    //Function to edit the text of a todo by id
    function editTodo(id: string, newText: string) {
        setTodos(prev =>
            prev.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
        );
    }


    //Function to clear all todos that have been marked completed
    function clearCompleted() {
        setTodos(prev => prev.filter(todo => !todo.completed));
    }

    //The value object contains the current todos and all the action functions
    const value: TodoContextType = {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted,
    };


    //Render the provider with the context value and children inside
    return <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>;
}

export function useTodos() {
    const context = useContext(TodoContext);
    if (!context) throw new Error('useTodos must be used within TodoProvider');
    return context;
}
