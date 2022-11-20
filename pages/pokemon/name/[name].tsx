import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React, { useState } from 'react';
import { pokeApi } from '../../../api';
import { Layout } from '../../../components/layouts';
import { Pokemon, PokemonListResponse } from '../../../interfaces';
import FavoriteButton from '../../../components/ui/FavoriteButton'
import { getPokemonData, localFavorites } from '../../../utils';

interface Props {
    pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {


    const [isFavorite, setIsFavorite] = useState(localFavorites.pokemonIsFavorite(pokemon.id))




    return (
        <Layout title={pokemon.name}>

            <FavoriteButton type='button' text='' onClick={() => localFavorites.onToggleFavorite(pokemon.id, setIsFavorite, isFavorite)} isFavorite={isFavorite} />


            <header className='flex flex-1 items-center justify-center flex-col '>
                <Image
                    src={pokemon.sprites.other?.['official-artwork'].front_default || 'no-image.png'}
                    alt={pokemon.name}
                    width={300}
                    height={300}

                />
                <section className='text-3xl inline-flex p-4 bg-slate-200 rounded-3xl dark:bg-slate-700' >
                    <span>#{pokemon.id}</span>
                    <h1 className='pl-2 capitalize'> {pokemon.name}</h1>

                </section>
            </header>
            <section className='flex flex-col flex-1 justify-center'>
                <h2 className='mt-4 self-center text-xl p-4 bg-slate-200 rounded-3xl dark:bg-slate-700'>Sprites</h2>
                {/* carrousel sprites */}
                <div className='flex  flex-row justify-center flex-wrap'>
                    <Image
                        src={pokemon.sprites.back_default}
                        alt={pokemon.name + ' back_default'}
                        width={150}
                        height={150}
                    />
                    <Image
                        src={pokemon.sprites.back_shiny}
                        alt={pokemon.name + ' back_shiny'}
                        width={150}
                        height={150}
                    />
                    <Image
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name + ' front_default'}
                        width={150}
                        height={150}
                    />
                    <Image
                        src={pokemon.sprites.front_shiny}
                        alt={pokemon.name + ' front_shiny'}
                        width={150}
                        height={150}
                    />
                </div>


            </section>

        </Layout>





    );
};



export const getStaticPaths: GetStaticPaths = async (ctx) => {


    // const pokemonsPages = [...Array(151)].map((val, i) => `${i + 1}`)


    const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`)



    return {
        // paths: [
        //     {
        //         params: { id: '1' }
        //     }
        // ],

        paths: data.results.map(poke => ({
            params: { name: poke.name }
        })
        ),
        fallback: false
    }

}


export const getStaticProps: GetStaticProps = async ({ params }) => {


    const { name } = params as { name: string };


    return {
        props: {
            pokemon: await getPokemonData(name)
        }
    }
}



export default PokemonByNamePage;