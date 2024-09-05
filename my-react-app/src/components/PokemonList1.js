// import { useEffect, useState } from 'react'
import React,{useEffect,useState} from 'react'
import axios from 'axios'


const PokemonList1 = () => {
  const[searchTerm,setSearchTerm]=useState("")
  const[pokemonData,setPokemonData]=useState([])
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response=>{
const fetches =  response.data.results.map(pokemon=>axios.get(pokemon.url)  )
promise.all(fetches)
  .then(response=>setPokemonData(response.map(res=>key.res))
  .catch(err=>console.error(err))
)
.catch

}

const filteredPokemon= pokemonData.filter(pokemonData=>
  pokemon.toLowerCase().include.toLowerCase()
)
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