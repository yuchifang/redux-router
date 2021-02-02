import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import _ from "lodash"
import { GetPokemonListAction } from '../store/actions/pokemonAction'
import { Link } from "react-router-dom"

export const PokemonList = () => {
    const dispatch = useDispatch()
    const pokemonList = useSelector(state => state.PokemonList)

    console.log({ pokemonList });

    useEffect(() => {

        const FetchData = (page = 1) => {
            dispatch(GetPokemonListAction(page))
        }

        FetchData(1)

    }, [])


    const ShowDataRender = () => {

        if (!_.isEmpty(pokemonList.data)) {

            return (
                <div className={"list-wrapper"}>
                    {pokemonList.data.map((element) => (
                        <div className={"pokemon-item"}>
                            <p>{element.name}</p>
                            <Link to={`/pokemon/${element.name}`}>View</Link>
                        </div>
                    ))}
                </div>
            )

        } else if (pokemonList.status === "loading") {

            return <p>Loading</p>
        } else if (pokemonList.errorMsg !== "" || pokemonList.status === "error") {

            return <p>{pokemonList.errorMsg}</p>
        } else {
            return <p>no data</p>
        }
    }

    return (
        <>
            <div className="search-wrapper">
                <p>Search:</p>
                <input type="text" />
                <button>Search</button>
            </div>
            {ShowDataRender()}
        </>
    );
}