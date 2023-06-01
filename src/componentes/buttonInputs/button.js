import React from "react"
import "../../App.css"

const Button = (props) => {
  const pokemon = 10

  const loadPokemon = () => {
    return props.setLimit(pokemon + props.limit)
  }

  const removePokemon = () => {
    if (props.limit > 10) {
      props.setLimit(props.limit - pokemon)
    } else {
      alert('Adicione mais pokemons')
      props.setLimit(pokemon)
    }
  }

  return (
    <div className="btn">
      <button onClick={() => loadPokemon()}>Load Pokemon</button>
      <button onClick={() => removePokemon() }>Remove Pokemon</button>
    </div>
  )
}

export default Button