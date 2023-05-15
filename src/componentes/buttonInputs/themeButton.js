import { useContext } from "react";
import "../../App.css";
import { themeContext } from "../../contexts/theme.contexts";

export const ThemeButton = (props) => {
    const {theme} = useContext(themeContext)
    
    return(
       <header style={{color: theme.color , background: theme.background}} className="cabecalho">
         <a href="/"  className="btnHeader">Home</a>
         <h1>Pokemons List</h1> 
         <button className="btnHeader" {...props} />
       </header> 
    )
}