import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { themeContext } from "../contexts/theme.contexts"

const CardPokemon = () => {

    const { theme } = useContext(themeContext)

    const [pokemon, setPokemon] = useState(null)

    const { name } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(item => setPokemon(item.data))
       
    }, [name])


    if (!pokemon) {
        return null
    }

    return (
        <section style={{color: theme.color, background: theme.background}} className="CardPokemon">
            <div className="pokemon">
                <img src={pokemon.sprites.other.dream_world.front_default} alt="Nome Pokemon" />
                <h3>{pokemon.name}</h3>
                <h4>{pokemon.types.map(type => type.type.name).join('  ')}</h4>
            </div>
            <div className="atributos">
                <div className="moves">
                    <h3>Move List</h3>
                    <ul className="listMoves">
                        {
                            pokemon.moves.map((item, index) => (
                                <li key={index}>
                                    <p>{item.move.name}</p>                            
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="ability">
                    <h3>Ability List</h3>
                    <ul className="listAbility">
                        {
                            pokemon.abilities.map((item, index) => (
                                <li key={index}>
                                    <h1>{item.ability.name}</h1>
                                    <Abilities  data={item.ability.url} />    
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

const Abilities = ({data}) => {

    const [ability, setAbility] = useState(null)

    useEffect(() => {
        axios.get(data).then(res => setAbility(res) )
    },[data])

    if(!ability){
        return null
    }

    return(
        <>
            <p>{ability.data.effect_entries.map(res => res.effect)}</p>
        </>
    )
}



export default CardPokemon