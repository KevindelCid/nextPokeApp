import { Dispatch, SetStateAction } from "react"
import localFavorites from "./localFavorites"


const pokemonIsFavorite =(id: number): boolean =>{

    if( typeof window === 'undefined' ) return false

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    return favorites.includes(id)

}



const toggleFavorite = (id: number)=>{







    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    if(favorites.includes(id)){ 
        favorites = favorites.filter(pokeId => pokeId !== id)
    }
    else{
        favorites.push(id)
    }



    localStorage.setItem('favorites', JSON.stringify(favorites))
} 




    const pokemons =(): number[] =>{

        return JSON.parse( localStorage.getItem('favorites') || '[]' )
    }


   

    const onToggleFavorite = (id:number, setIsFavorite: Dispatch<SetStateAction<boolean>>, isFavorite: boolean  ) => {
        localFavorites.toggleFavorite(id)
        setIsFavorite(localFavorites.pokemonIsFavorite(id))

          
   



    }




export default {
    toggleFavorite,
    pokemonIsFavorite,
    pokemons,
    onToggleFavorite
}