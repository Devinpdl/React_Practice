import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    currentTheme: "light",
    darkTheme: () => {},
    lightTheme: () => {},
    //Here, we're giving a default object of currentTheme of light inside the context. 
    //If the user has set a preference in localStorage it will override this value when the app is loaded.
});

export const ThemeProvider = ThemeContext.Provider;
//Here we're exporting ThemeContext variable so that other components can access 
//it using `import { ThemeContext }` and then calling `use Context(ThemeContext)` to get the values.

//Now creating and Exporting custom hook also;
export default function useDarkLight() {
    return useContext(ThemeContext);
    //Here, useDarkLight() will return useContext in which we've given a context  called 'ThemeContext'.
    }
//Thus, by this custom hooks we don't need to import the whole provider every time we want to access the`themeMode`
// , `darkTheme`, or `Light as we're importing in 10_ContextAPIproject ...
//So, useDarkLight will give us the direct access to the context we've created above..so we export it
//and later can be imported...


