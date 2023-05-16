import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { themeContext } from "../contexts/theme.contexts"

const CardPokemon = () => {

    const { theme } = useContext(themeContext)

    const [pokemon, setPokemon] = useState(null)

    const [attribute, setAttribute] = useState('Click to see assignments')

    const { name } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(item => setPokemon(item.data))
    }, [name])

    const move = () => {
        return setAttribute(pokemon.moves.map((item, index) => (
            <li key={index}>
                {item.move.name}
            </li>
        )))
    }

    const ability = () => {
        return setAttribute(pokemon.abilities.map((item, index) => (
            <li key={index}>
                <h2>{item.ability.name}</h2>
                <Abilities data={item.ability.url} />
            </li>
        )))
    }


    if (!pokemon) {
        return null
    }

    return (
        <section style={{ color: theme.color, background: theme.background }}>
            <div className="CardPokemon">
                <div className="pokemon">
                    <img src={pokemon.sprites.other.dream_world.front_default} alt="Nome Pokemon" />
                    <h3>{pokemon.name}</h3>
                    <h4>{pokemon.types.map(type => type.type.name).join('  ')}</h4>
                </div>
                <div className="attribute">
                    <div className="attBtn">
                        <button className="attributeBtn" onClick={move}>Move List</button>
                        <button className="attributeBtn" onClick={ability}>Ability List</button>
                    </div>
                    <div className="listAttribute">
                        <ul>
                            {attribute}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Abilities = ({ data }) => {

    const [ability, setAbility] = useState(null)

    useEffect(() => {
        axios.get(data).then(res => setAbility(res))
    }, [data])

    if (!ability) {
        return null
    }

    return (
        <p>{ability.data.effect_entries.map(res => res.effect)}</p>
    )
}



export default CardPokemon