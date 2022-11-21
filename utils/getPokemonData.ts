import { ParsedUrlQuery } from "querystring";
import { pokeApi } from "../api";
import { Pokemon, SmallPokemon } from "../interfaces";





export const getPokemonData = async (nameOrId: string ) =>{
    
    
try{
 const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)




    const pokemon = {

        id: data.id,
        name: data.name,
        sprites: data.sprites

    }
    return pokemon


}catch (err){console.log(err)
return null
}




   
}