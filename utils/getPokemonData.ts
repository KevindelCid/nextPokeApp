import { ParsedUrlQuery } from "querystring";
import { pokeApi } from "../api";
import { Pokemon, SmallPokemon } from "../interfaces";





export const getPokemonData = async (nameOrId: string ) =>{
    
    




    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)


    const pokemon = {

        id: data.id,
        name: data.name,
        sprites: data.sprites

    }
    return pokemon
}