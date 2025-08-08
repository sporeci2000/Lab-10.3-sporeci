import React from 'react';
import { useTodos } from '../contexts/TodoContext';
import { useFilter } from '../contexts/FilterContext';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = () => {

    //Get the list of todos from context
    const { todos } = useTodos();

    //Get the current filter value from context
    const { filter } = useFilter();


    //Filter todos based on the current filter setting
    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <ul>
            {/* Render a TodoItem component for each filtered todo */}
            {filteredTodos.map(todo => (

                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};
