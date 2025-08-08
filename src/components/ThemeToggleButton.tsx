//import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggleButton() {
    //Use the theme context to get current theme and toggle function
    const { theme, toggleTheme } = useTheme();

    return (
        //Button that calls toggleTheme when clicked to switch themes
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
    );
}