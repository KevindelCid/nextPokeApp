import Head from "next/head";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { Navbar } from "../ui"


interface LayoutData {
    children: ReactNode;
    title: string
}




const origin = (typeof window === 'undefined') ? '' : window.location.origin



export const Layout: FC<LayoutData> = ({ children, title }) => {






    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Kevin del Cid" />
                <meta name="description" content="about pokemon XXXX" />
                <meta name="keywords" content="XXX, pokemon, pokedex, pokemaniaco, pokeballs" />



                <meta property="og:title" content={`info about ${title}`} />
                <meta property="og:description" content={`In this page you can see info about ${title}`} />
                <meta property="og:image" content={`${origin}/imgs/banner.png`} />


            </Head>

            <Navbar />

            <main className="py-3 px-4">
                {children}
            </main>

        </>
    );
};

