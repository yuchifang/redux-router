import { POKEMON_LIST_LOADING, POKEMON_LIST_SUCCESS, POKEMON_LIST_FAIL } from "../actions/actionType"

const DefaultState = {
    status: "idle",
    data: [],
    errorMsg: "",
    count: 0
}


const PokemonListReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case POKEMON_LIST_LOADING:
            return {
                ...state,
                status: "loading",
                errorMsg: ""
            }
        case POKEMON_LIST_SUCCESS:
            return {
                ...state,
                status: "success",
                errorMsg: "",
                data: action.payload.results,
                count: action.payload.count

            }
        case POKEMON_LIST_FAIL:
            return {
                ...state,
                status: "error",
                errorMsg: "unable to get pokemon"
            }
        default:
            return state
    }
}

export default PokemonListReducer