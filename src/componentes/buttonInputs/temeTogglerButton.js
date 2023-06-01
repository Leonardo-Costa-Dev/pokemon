import React, { useContext } from "react"
import { themeContext, themes } from "../../contexts/theme.contexts"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(themeContext)

    return (
        <div>
            <button className="btnHeader" onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
            {theme === themes.light ? 'dark' : 'ligth'}
            </button>
        </div>
    )
}