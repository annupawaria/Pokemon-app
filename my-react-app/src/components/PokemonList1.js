// import { useEffect, useState } from 'react'
import React,{useEffect,useState} from 'react'
import axios from 'axios'


const PokemonList1 = () => {
  const[searchTerm,setSearchTerm]=useState("")
  const[pokemonData,setPokemonData]=useState([])
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((fetches)=>{
const response=response.data.results.map(pokemon=>axios.get(pokemon.url))
  Promise.all(fetches)
  .then()
.catch(err=>console.error(err))
      })
      .catch(err=>console.error(err))
},[])
  const filteredpokemon=pokemon.filter(pokemon=>pokemon.name.LowerCase().includes(searchTerm.toLowerCase())
  )
  
  return (
    <div>
        <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default PokemonList1