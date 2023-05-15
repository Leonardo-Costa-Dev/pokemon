import React, { useContext } from "react"
import { themeContext, themes } from "../contexts/theme.contexts"
import { ThemeButton } from "./buttonInputs/themeButton"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(themeContext)

    return (
        <div>
            <ThemeButton onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
            {theme === themes.light ? 'dark' : 'ligth'}
            </ThemeButton>
        </div>
    )
}