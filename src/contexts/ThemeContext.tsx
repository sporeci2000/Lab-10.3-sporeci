import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Theme } from '../types/types'

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void; //function to switch between themes
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider(props: any) {
    //Initialize theme from localStorage or default to 'light'
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem('theme') as Theme) || 'light';
    });

    //Save theme to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    //Toggle between 'light' and 'dark'
    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme}>{props.children}</div>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
}
