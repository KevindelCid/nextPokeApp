import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { SmallPokemon } from '../../interfaces';



interface Props {
    pokemon: SmallPokemon
}


export const PokemonCard: FC<Props> = ({ pokemon }) => {


    const router = useRouter();

    const handleClick = () => {
        router.push(`/pokemon/${pokemon.id}`)
    }
    return (
        <li className="flex flex-col w-72 items-center
            bg-slate-50
            dark:bg-slate-700
            transition duration-300 ease-out  
            rounded
            hover:skew-y-1
            hover:skew-x-1
            active:bg-black
            "
            onClick={handleClick}
        >

            <Image
                src={pokemon.img}
                alt={pokemon.name}
                width={100}
                height={100}
            />
            <span className="capitalize">#{pokemon.id} - {pokemon.name}</span>
        </li>
    );
};

export default PokemonCard; 