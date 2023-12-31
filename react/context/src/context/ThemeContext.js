import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();
export const ThemeProvider =({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme])
    const value = {
        theme,
        setTheme
    };
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);
// export default ThemeContext; kod kalabaligi olmamasi icin yukarida ki gimi tanimlana bilir