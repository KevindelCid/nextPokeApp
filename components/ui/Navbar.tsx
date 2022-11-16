import Image from 'next/image';
import React from 'react';
import NextLink from 'next/link'


export const Navbar = () => {
    return (

        <div className='
        flex w-full 
        flex-row items-center 
        justify-start 
        pr-3 
        bg-slate-700
        px-4
        text-stone-400 
        gap-4
        
         ' >
            <NextLink href='/' passHref className='inline-flex '>
                <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
                    alt='pokemon name'
                    width={70}
                    height={70}
                />

                <h2 className='text-3xl pt-4' ><span className='text-stone-200' >P</span>okemon</h2>
            </NextLink>
            <section className='flex align-top  flex-1 justify-end gap-4'>
                <NextLink href='/favorites' passHref>
                    <span className='pt-2 hover:text-stone-200  transition duration-300 ease-out'>Favorites</span>
                </NextLink>

                <NextLink href='/' passHref>
                    <span className='pt-2 hover:text-stone-200   transition duration-300 ease-out '>Pokedex</span>
                </NextLink>


            </section>

        </div>

    );
};
