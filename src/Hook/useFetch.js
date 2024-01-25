import axios from 'axios'
import React, { useState } from 'react'

const useFetch = (url) => {

    const [response, setResponse] = useState()

    const getApi=()=>{
        axios.get(url)
            .then(res => setResponse(res.data))   //peticion de todos los pokemones
            .catch(err => console.log(err))
    }

    const getTypePokemon = (urlType) => {
        axios.get(urlType)
            .then(res => {
                const obj = {
                    results: res.data.pokemon.map(pokeInfo => pokeInfo.pokemon)   //transformamos todo a un objeto con la propiedad results para poder aplicar la misma logica
                }
                setResponse(obj)
            })
            .catch(err => console.log(err))
    }

    return [response, getApi, getTypePokemon]

}

export default useFetch