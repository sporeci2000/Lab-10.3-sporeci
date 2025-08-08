import { useState } from 'react';
import { useTodos } from '../contexts/TodoContext';

export function TodoInput() {

    //Access the addTodo function from the TodoContext
    const { addTodo } = useTodos();

    //Local state to keep track of the current input text
    const [text, setText] = useState('');


    //Function to handle adding a new todo
    const handleAdd = () => {

        if (text.trim()) {
            addTodo(text.trim());

            //Clear the input after adding
            setText('');
        }
    };

    return (
        <div>
            <input
                value={text}

                // Update local state whenever the user types
                onChange={e => setText(e.target.value)}
                placeholder="What needs to be done?"
            />

            {/* Button to add the new todo when clicked */}
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    );
}
