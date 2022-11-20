import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { SmallPokemon } from '../../interfaces';
import { localFavorites } from '../../utils';
import FavoriteButton from '../ui/FavoriteButton';



interface Props {
    pokemon: SmallPokemon;
    onClick?: () => void;
}


export const PokemonCard: FC<Props> = ({ pokemon, onClick }) => {








    const router = useRouter();

    const handleClick = () => {
        router.push(`/pokemon/name/${pokemon.name}`)
    }



    const [isFavorite, setIsFavorite] = useState(localFavorites.pokemonIsFavorite(pokemon.id))



    return (
        <li className="flex flex-col w-72 items-center
            bg-slate-50
            dark:bg-slate-700
            transition duration-300 ease-out  
            rounded
           
            active:bg-black
            relative
            "
            onClick={onClick}
        >
            <FavoriteButton type='circle' onClick={() => localFavorites.onToggleFavorite(pokemon.id, setIsFavorite, isFavorite)} isFavorite={isFavorite} />

            <Image
                src={typeof pokemon.img === 'undefined' ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg` : pokemon.img}
                alt={typeof pokemon.name === 'undefined' ? '' : pokemon.name}
                width={100}
                height={100}
                onClick={handleClick}
                className='cursor-pointer'
            />
            <span onClick={handleClick} className="capitalize cursor-pointer ">#{pokemon.id} - {pokemon.name}</span>
        </li>
    );
};

export default PokemonCard; 