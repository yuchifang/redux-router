import axios from "axios"
import {
    POKEMON_LIST_LOADING,
    POKEMON_LIST_SUCCESS,
    POKEMON_LIST_FAIL,
    POKEMON_MULTIPLE_LOADING,
    POKEMON_MULTIPLE_SUCCESS,
    POKEMON_MULTIPLE_FAIL
} from "./actionType"
export const GetPokemonListAction = (page) => async dispatch => {
    //試試用then catch 方式
    console.log("Eee")
    try {
        dispatch({
            type: POKEMON_LIST_LOADING
        })
        const perPage = 15;
        const offset = (page * perPage) - perPage

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)

        dispatch({
            type: POKEMON_LIST_SUCCESS,
            payload: res.data
        })

    } catch (e) {

        dispatch({
            type: POKEMON_LIST_FAIL,
        })
    }
}

export const GetPokemon = (pokemon) => async dispatch => {
    try {
        dispatch({
            type: POKEMON_MULTIPLE_LOADING
        })


        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        dispatch({
            type: POKEMON_MULTIPLE_SUCCESS,
            payload: res.data,
            pokemonName: pokemon
        })

    } catch (e) {

        dispatch({
            type: POKEMON_MULTIPLE_FAIL,
        })
    }
}