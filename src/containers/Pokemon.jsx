import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { GetPokemon } from "../store/actions/pokemonAction"
import _ from "lodash"

export const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch()
    const pokemonState = useSelector(state => state.Pokemon)

    useEffect(() => {

        dispatch(GetPokemon(pokemonName))


    }, [])

    const ShowDataRender = () => {
        if (!_.isEmpty(pokemonState.data[pokemonName])) {
            const pokeData = pokemonState.data[pokemonName]

            return (
                <div className={"pokemon-wrapper"}>
                    <div className="item">
                        <h1>Sprites</h1>
                        <img src={pokeData.sprites.front_default} alt={`${pokemonName}Img`} />
                        <img src={pokeData.sprites.back_default} alt={`${pokemonName}Img`} />
                        <img src={pokeData.sprites.front_shiny} alt={`${pokemonName}Img`} />
                        <img src={pokeData.sprites.back_shiny} alt={`${pokemonName}Img`} />
                    </div>
                    <div className="item">
                        <h1>Stats</h1>
                        {pokeData.stats.map(element => (
                            <p>{element.stat.name}: {element.base_stat}</p>
                        ))}
                    </div>
                    <div className="item">
                        <h1>Abilities</h1>
                        {
                            pokeData.abilities.map(element => (
                                <p>{element.ability.name}</p>
                            ))
                        }
                    </div>
                </div>
            )

        }

        if (pokemonState.loading) {
            return <p>Loading...</p>
        }

        if (pokemonState.errorMsg !== "") {
            return <p>{pokemonState.errorMsg}</p>
        }

        return <p>error getting pokemon</p>
    }
    // console.log({ PokemonState });
    // console.log({ PokemonState })
    // console.log({ pokemonName });

    return (
        <div className="poke">
            <h1>{pokemonName}</h1>
            {ShowDataRender()}
        </div>
    );
}