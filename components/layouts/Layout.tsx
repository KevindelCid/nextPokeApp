import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar } from "../ui"


interface LayoutData {
    children: ReactNode;
    title: string
}


export const Layout: FC<LayoutData> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Kevin del Cid" />
                <meta name="description" content="about pokemon XXXX" />
                <meta name="keywords" content="XXX, pokemon, pokedex, pokemaniaco, pokeballs" />

            </Head>

            <Navbar />

            <main className="py-3 px-4">
                {children}
            </main>

        </>
    );
};

