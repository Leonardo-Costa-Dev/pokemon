import React from "react"
import "../../App.css"

const Button = (props) => {

  const loadPokemon = () => {
    const pokemon = 10
    return props.setLimit(pokemon + props.limit)
  }

  const removePokemon = () => {
    const pokemon = 10
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