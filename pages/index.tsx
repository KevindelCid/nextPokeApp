import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { FlexLayout } from "../components/layouts/FlexLayout";

import { PokemonCard } from "../components/pokemon/";
import { PokemonListResponse, SmallPokemon } from "../interfaces";





interface Props {
  pokemons: SmallPokemon[];

}



const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon list" >


      <FlexLayout>
        {
          pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />

          ))
        }
      </FlexLayout>



    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {


  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')


  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;