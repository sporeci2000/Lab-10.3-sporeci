import { TodoProvider } from './contexts/TodoContext';
import { FilterProvider } from './contexts/FilterContext';
import { ThemeProvider } from './contexts/ThemeContext';

//Import all your context providers that manage global state
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { FilterButtons } from './components/FilterButtons';
import { ThemeToggleButton } from './components/ThemeToggleButton';

import './App.css';

function App() {
  return (
    //Wrap the entire app with ThemeProvider to provide theme context
    <ThemeProvider>
      {/* Wrap with TodoProvider to provide todo state and actions */}
      <TodoProvider>
        {/* Wrap with FilterProvider to provide current filter state */}
        <FilterProvider>
          <div>
            <h1>Todo App (Context API)</h1>
            <ThemeToggleButton />
            <TodoInput />
            <FilterButtons />
            <TodoList />
          </div>
        </FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
