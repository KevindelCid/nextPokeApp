import Image from "next/image";

export const FavoritesEmpty = () => {




    return (
        <div className="flex flex-col h-screen -mt-24 items-center justify-center self-center" >


            <h1>Favorites list is empty</h1>
            <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/129.svg'
                alt='margikarp image'
                width={100}
                height={100}
                className='opacity-50'
            />

        </div>
    );
};

