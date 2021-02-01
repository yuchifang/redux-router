import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import _ from "lodash"
import { GetPokemonList } from '../store/actions/pokemonAction'


export const PokemonList = () => {
    const dispatch = useDispatch()
    const pokemonList = useSelector(state => state.PokemonList)

    console.log({ pokemonList });

    useEffect(() => {

        const FetchData = (page = 1) => {
            dispatch(GetPokemonList(page))
        }

        FetchData(1)

    }, [])


    const ShowDataRender = () => {

        if (!_.isEmpty(pokemonList.data)) {

            return <p>have data</p>
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
            {ShowDataRender()}
        </>
    );
}