import { createContext, useState } from "react"

export const themes = {
    light: {
        color: '#000',
        background: '#fff'
    },
    dark: {
        color: '#fff',
        background: '#000'
    }
}

export const themeContext = createContext({})

export const ThemeProvid = (props) => {
    const [ theme, setTheme ] = useState(themes.light)

    return (
        <themeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </themeContext.Provider>
    )
}