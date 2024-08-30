import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PokemonList1 = () => {
    const [searchTerm,setSearchTerm]=useState("")
useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response=>{

    }

    )
})
  return (
    <div>
        <div>
            <input type='text'
            placeholder='search pokemon'
            value={searchTerm}
            onChange={e=>setSearchTerm(e.target.value)}/>
        </div>
    </div>
  )
}

export default PokemonList1