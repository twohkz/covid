import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from '../utils/theme';

const defaultContextData = {
    dark: false,
    toggle: () => {}
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

const useEffectDarkMode = () => {
    const [themeState, setThemeState] = React.useState({
        dark: false,
        hasThemeLoaded: false
    });
    React.useEffect(() => {
        const IsDark = localStorage.getItem('dark') === 'true';
        setThemeState({ ...themeState, dark: IsDark, hasThemeLoaded: true });
    }, []);

    return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
    const [themeState, setThemeState] = useEffectDarkMode();

    if (!themeState.hasThemeLoaded) {
        // If the theme is not yet loaded we don't want to render
        // this is just a workaround to avoid having the app rendering
        // in light mode by default and then switch to dark mode 
        // while getting the theme state from localStorage
        return <div />;
    }

    const toggle = () => {
        // toggle function code goes here
        const dark = !themeState.dark;
        localStorage.setItem('dark', JSON.stringify(dark));
        setThemeState({ ...themeState, dark });
    };

    const computedTheme = themeState.dark ? theme('dark') : theme('light');

    return (
        <EmotionThemeProvider theme={computedTheme}>
            <ThemeContext.Provider
                value={{
                    dark: themeState.dark,
                    toggle
                }}
            >
                {children}
            </ThemeContext.Provider>
        </EmotionThemeProvider>
    );
};

export { ThemeProvider, useTheme };