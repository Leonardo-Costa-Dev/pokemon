import React from "react"
import "../../App.css"

const Button = (props) => {

    return(
        <div className="btn">
          <button onClick={(item) => {
            item = 10
            props.setLimit(item + props.limit)
            }}>Load Pokemon
          </button>
          <button onClick={(item) => {
            item = 10
            if(props.limit > 10){
                props.setLimit(props.limit - item)
            }else{
                alert('Adicione mais pokemons')
                props.setLimit(item)
            }
            }}>Remove Pokemon
          </button>
        </div>
    )
}

export default Button