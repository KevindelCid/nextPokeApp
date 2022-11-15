import Image from 'next/image';
import React from 'react';

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
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
                alt='pokemon name'
                width={70}
                height={70}
            />

            <h2 className='text-3xl  ' ><span className='text-stone-200' >P</span>okemon</h2>
            <section className='flex align-top  flex-1 justify-end gap-4'>
                <a href="#" className='pt-2 hover:text-stone-200   transition duration-300 ease-out'>Favorites</a>
                <a href="#" className='pt-2 hover:text-stone-200   transition duration-300 ease-out '>Pokedex</a>
            </section>

        </div>
    );
};
