import axios from "axios"
import { POKEMON_LIST_LOADING, POKEMON_LIST_SUCCESS, POKEMON_LIST_FAIL } from "./actionType"
export const GetPokemonList = (page) => async dispatch => {
    //試試用then catch 方式

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