import { useState } from 'react';
import type { Todo } from '../types/types';
import { useTodos } from '../contexts/TodoContext';

export function TodoItem({ todo }: { todo: Todo }) {
    //Get functions from context to toggle, edit, and delete todos
    const { toggleTodo, deleteTodo, editTodo } = useTodos();

    //Local state to track if we are currently editing the todo text
    const [isEditing, setIsEditing] = useState(false);

    //Local state to keep the new text when editing
    const [newText, setNewText] = useState(todo.text);


    //Function to save the edited text and exit editing mode
    const handleEdit = () => {
        editTodo(todo.id, newText); //Call editTodo with updated text
        setIsEditing(false); //Close the edit mode
    };


    let todoContent;

    if (isEditing) {
        // If editing, show input and save button
        todoContent = (
            <>
                <input
                    value={newText}
                    onChange={e => setNewText(e.target.value)}
                />
                <button onClick={handleEdit}>Save</button>
            </>
        );
    } else {
        // If not editing, show todo text with optional line-through
        todoContent = (
            <span className={todo.completed ? 'completed' : ''}>
                {todo.text}
            </span>
        );
    }


    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />

            {/* Render the todo content based on editing state */}
            {todoContent}

            {/* Button to toggle edit mode */}
            <button onClick={() => setIsEditing(!isEditing)}>Edit</button>

            {/* Button to delete the todo */}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}
