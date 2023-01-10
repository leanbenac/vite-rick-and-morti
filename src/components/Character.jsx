import React from 'react'
import '../../src/index.css'

function Character({character}) {
    return (
        <div className="text-center p-5 w-20 ">
        <h3>{character.name}</h3>
        <img className=" img-fluid rounded-pill guerrero" src={character.image} alt={character.name}/>
        <p>{character.origin.name}</p>
      </div>     
    )
}

export default Character
