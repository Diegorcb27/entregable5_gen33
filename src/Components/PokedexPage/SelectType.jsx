import React, { useEffect, useRef } from 'react'
import useFetch from '../../Hook/useFetch'
import "./stykes/SelecType.css"

const SelectType = ({setTypeSelected}) => {

const url="https://pokeapi.co/api/v2/type"

const[types, getTypes]=useFetch(url)

useEffect(() => {
 getTypes()
}, [])

const typeRef=useRef()

const handleChange=()=>{
    setTypeSelected(typeRef.current.value)
}


  return (
    <select className="selected_type" ref={typeRef} onChange={handleChange}>
        <option value="allPokemons">All Pokemons</option>  
        {
            types?.results.map( type =>(
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
        
    </select>
  )
}

export default SelectType