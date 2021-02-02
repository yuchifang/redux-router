import { POKEMON_MULTIPLE_FAIL, POKEMON_MULTIPLE_LOADING, POKEMON_MULTIPLE_SUCCESS } from "../actions/actionType"

const DefaultState = {
    status: "idle",
    data: {},
    errorMsg: ""
}

const PokemonMultipleReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case POKEMON_MULTIPLE_LOADING:
            return {
                ...state,
                status: "loading",
                errorMsg: "",
            }
        case POKEMON_MULTIPLE_FAIL:
            return {
                ...state,
                status: "error",
                errorMsg: "unable to find pokemon",
            }

        case POKEMON_MULTIPLE_SUCCESS:
            return {
                ...state,
                status: "success",
                errorMsg: "",
                data: {
                    ...state.data,
                    [action.pokemonName]: action.payload
                }
            }
        default:
            return state
    }
}
export default PokemonMultipleReducer