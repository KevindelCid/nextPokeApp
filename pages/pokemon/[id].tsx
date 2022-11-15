import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';

interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {


    return (
        <Layout title='bulbasaur'>
            <h1>{pokemon.name}</h1>
        </Layout>
    );
};



export const getStaticPaths: GetStaticPaths = async (ctx) => {


    const pokemonsPages = [...Array(151)].map((val, i) => `${i + 1}`)


    return {
        // paths: [
        //     {
        //         params: { id: '1' }
        //     }
        // ],

        paths: pokemonsPages.map(id => ({
            params: { id }
        })),
        fallback: false
    }

}


export const getStaticProps: GetStaticProps = async ({ params }) => {



    const { id } = params as { id: string };




    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

    return {
        props: {
            pokemon: data
        }
    }
}



export default PokemonPage;