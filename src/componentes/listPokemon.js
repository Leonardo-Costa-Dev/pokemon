import { useEffect, useState } from "react"
import Button from "./buttonInputs/button"
import { useContext } from "react"
import { themeContext } from "../contexts/theme.contexts"
import '../App.css'
import axios from "axios"
import Navbar from "./buttonInputs/navbar"
import { Link } from "react-router-dom"


const ListPokemon = () => {

  const { theme } = useContext(themeContext)

  const [limit, setLimit] = useState(10)
  const [pokemon, setPokemon] = useState([]);
  const [card, setCard] = useState([])

  const getPokemons = async (limit) => {
    let results = []
    for (let i = 1; i < limit; i++) {
      results.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }
    return axios.all(results.map((results) => axios.get(results))).then((dados) => setPokemon(dados));
  }

  const i_pokemon = async () => {
    let results = []
    for (let i = 1; i < 200; i++) {
      results.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }
    return axios.all(results.map((results) => axios.get(results))).then((dados) => setCard(dados));
  }

  const pokemonFilter = (name) => {
    let FilterPokemons = []
    if (name === '') {
      return getPokemons(limit)
    }
    for (let i in card) {
      if (card[i].data.name.includes(name)) {
        FilterPokemons.push(card[i])
      }
    }
    setPokemon(FilterPokemons)
  }

  useEffect(() => {
    getPokemons(limit)
    i_pokemon()
  }, [limit])


  return (
    <>
      <header style={{ color: theme.color, background: theme.background }}>
        <Navbar pokemonFilter={pokemonFilter} />
      </header>
      <section style={{ color: theme.color, background: theme.background }}>
        <div className="listPokemon" >
          <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
            {pokemon.map((pokemon, index) =>
              <Link key={index} to={`/${pokemon.data.name}`}>
                <li key={index}>
                  {<img src={pokemon.data.sprites.front_default} alt="imagem pokemon" />}
                  {<h3>{pokemon.data.name}</h3>}
                </li>
              </Link>
            )}

          </ul>
          <Button limit={limit} setLimit={setLimit} />
        </div>
      </section>
    </>
  )
}

export default ListPokemon