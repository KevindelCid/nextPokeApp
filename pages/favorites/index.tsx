import React, { useEffect, useState } from 'react';
import { FlexLayout, Layout } from '../../components/layouts';
import { PokemonCard } from '../../components/pokemon';
import { FavoritesEmpty } from '../../components/ui'
import { localFavorites } from '../../utils';

const Favorites = () => {


    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])


    const [toggleFresh, setToggleFresh] = useState(false)

    useEffect(() => {

        setFavoritePokemons(localFavorites.pokemons())

    }, [toggleFresh])



    return (
        <Layout title='favorites'>

            {
                favoritePokemons.length === 0
                    ? (<FavoritesEmpty />)
                    : (<FlexLayout>
                        {
                            favoritePokemons.map(id => (
                                <PokemonCard key={id} pokemon={{ id: id }} onClick={() => setToggleFresh(!toggleFresh)} />
                            ))
                        }

                    </FlexLayout>



                    )
            }




        </Layout>
    );
};

export default Favorites;