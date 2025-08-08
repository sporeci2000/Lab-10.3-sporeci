In this lab, I built a Todo application using React and the Context API to manage global state in a clean and organized way. Instead of passing props deeply through components (prop drilling), I created multiple contexts to handle different parts of the application state independently. This helped keep the code easier to read and maintain.

The first context I created is the TodoContext. This context manages the list of todos and all actions related to them, like adding new todos, editing existing ones, toggling their completed status, deleting them, and clearing all completed todos. I used React’s useState hook to hold the current list of todos. To keep data persistent across browser refreshes, I saved the todos to localStorage and reloaded them on app start. The TodoProvider component makes this todo data and the related functions available to any child component. To make it simpler to access these in components, I wrote a custom hook called useTodos.

Next, I created the FilterContext to manage which todos are visible based on the user’s selection. The filter can be “all,” “active” (not completed), or “completed.” I used useState again to hold the current filter and a function to update it. The FilterProvider component shares this filter state and setter function across the app. Like with todos, I added a custom hook, useFilter, so components can easily read and update the filter value.

For the app’s appearance, I added a ThemeContext. It keeps track of whether the app is in light or dark mode using useState. The current theme is saved to localStorage so the user’s choice stays even after closing or refreshing the browser. The context also provides a toggleTheme function to switch between light and dark modes. The ThemeProvider wraps relevant parts of the app and applies the theme as a CSS class on the container element. I created the useTheme hook so components can easily access the current theme and toggle function.

I built several components that use these contexts to create the app’s functionality. The TodoInput component lets users add new todos by typing in a text input and clicking an Add button. It manages its own input state and calls the addTodo function from the todo context to update the global todo list.

The TodoItem component represents each todo in the list. It shows the todo’s text with a checkbox to mark it completed or not, and buttons to edit or delete the todo. The editing mode lets users change the todo’s text and save the changes. All modifications use functions from the todo context, keeping the app’s state consistent.

The TodoList component displays the list of todos filtered according to the current filter state. It uses the useTodos hook to get all todos and useFilter to get the active filter. It filters the todos accordingly and renders a TodoItem for each visible todo, updating automatically when the filter or todos change.

To allow users to change the filter, I created the FilterButtons component. It shows three buttons labeled “all,” “active,” and “completed.” Clicking a button updates the filter in the filter context. The currently selected filter button is shown in bold to help users see which filter is active.

For theme control, I created the ThemeToggleButton component. It shows a button that lets users switch between light and dark mode. The button label dynamically changes to indicate which mode the app will switch to when clicked.

Finally, in the main App component, I combined everything. I wrapped the app’s UI inside the ThemeProvider, TodoProvider, and FilterProvider so that the entire component tree can access the respective states and functions. Inside these providers, I rendered the app header, theme toggle button, todo input, filter buttons, and the filtered todo list. This organization keeps the app clean, modular, and easy to manage.

Difficulties
The main difficulty I faced was understanding and effectively using the React Context API. It took some time to grasp how to properly create context providers, share state and functions through them, and consume that context safely in components using custom hooks. I also learned about the importance of organizing multiple contexts when managing different parts of the app’s state independently, such as todos, filters, and themes. Handling persistence with localStorage inside contexts was another challenge, but it helped me understand side effects better with the useEffect hook. Overall, working through these challenges deepened my knowledge of React state management and context design patterns.


RESOURCES:
https://legacy.reactjs.org/docs/context.html#reactcreatecontext    
https://legacy.reactjs.org/docs/hooks-reference.html#usecontext   
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage    
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures       
https://legacy.reactjs.org/docs/context.html    
https://legacy.reactjs.org/docs/lists-and-keys.html     
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions    
