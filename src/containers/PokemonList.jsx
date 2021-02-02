import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import _ from "lodash"
import { GetPokemonListAction } from '../store/actions/pokemonAction'
import { Link } from "react-router-dom"
import ReactPaginate from "react-paginate"

export const PokemonList = () => {
    const dispatch = useDispatch()
    const pokemonList = useSelector(state => state.PokemonList)
    const [search, setSearch] = useState("")
    const searchRef = useRef(null)

    // console.log({ pokemonList });

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
                    {pokemonList.data
                        .filter(element => element.name.indexOf(search) !== -1)
                        .map((element) => (
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

    const handleClick = () => {
        setSearch(searchRef?.current?.value)
    }

    return (
        <>
            <div className="search-wrapper">
                <p>Search:</p>
                <input type="text" ref={searchRef} />
                <button onClick={() => handleClick()}>Search </button>
            </div>
            {ShowDataRender()}
            {
                !_.isEmpty(pokemonList.data) &&
                <ReactPaginate
                    pageCount={Math.ceil(pokemonList.count / 15)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={(data) => GetPokemonListAction(data.selected)}
                    containerClassName={"pagination"}
                />
            }
        </>
    );
}