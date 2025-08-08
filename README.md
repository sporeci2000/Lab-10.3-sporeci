ToDoContext - In this file, I created a React Context called TodoContext to manage the todo list for my app. I used useState to keep track of the todos and made functions to add, edit, delete, toggle and clear completed todos. I also saved the todos in localStorage so they don’t get lost when I refresh the page. The TodoProvider component lets me share the todos and these functions with any part of my app. When I want to use the todos inside a component, I just use the useTodos hook to get easy access.

FilterContext - In this file, I created a React Context called FilterContext to manage the current filter state in my Todo app. It keeps track of which todos to show: all, active or completed. I use React’s useState to store the filter value and provide a function to change it. The FilterProvider component makes this filter state and function available to any components wrapped inside it. To use the filter easily in components, I created a custom hook called useFilter, which ensures I’m accessing the filter context safely.

ThemeContext - In this file, I created a React Context called ThemeContext to manage the light and dark theme for my app. It uses React’s useState to keep track of the current theme, which is either 'light' or 'dark'. The theme state is saved to localStorage so that the user’s choice is remembered even after refreshing the page. I also wrote a function toggleTheme that switches between the two themes. The ThemeProvider component wraps parts of the app that need access to the theme and applies the current theme as a CSS class to the container. To use the theme easily in my components, I created a custom hook called useTheme which safely accesses the theme context.

I created the TodoInput component which allows users to add new todos to the list. It uses React’s useState to keep track of the text the user types in the input field. When the user clicks the Add button, it calls the addTodo function from the TodoContext to add the new todo to the global state. After adding, it clears the input field so the user can type a new todo easily.

I created the TodoItem component to display each todo in the list. It shows the todo text with a checkbox to mark it completed or not. Users can click an Edit button to change the todo’s text and save their changes. There is also a Delete button to remove the todo from the list. This component uses functions from the TodoContext like toggleTodo, editTodo, and deleteTodo to update the global state.

I created the TodoList component to display the list of todos based on the current filter. It uses the useTodos context to get all todos and the useFilter context to get the current filter value. Then, it filters the todos to show only those that match the filter: all todos, only active (not completed), or only completed. Finally, it maps over the filtered todos and renders a TodoItem component for each one. This keeps the list updated and responsive to the user’s filter choice.

I created the FilterButtons component which lets users choose how to filter the todo list. It displays three buttons: "all", "active", and "completed". The component uses the useFilter context to read the current filter and update it when a button is clicked. The active filter button is shown in bold to help users see which filter is applied. This makes it easy to switch between different views of the todos.

RESOURCES:
https://legacy.reactjs.org/docs/context.html#reactcreatecontext   
https://legacy.reactjs.org/docs/hooks-reference.html#usecontext 
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures 
https://legacy.reactjs.org/docs/context.html 
https://legacy.reactjs.org/docs/lists-and-keys.html 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions 