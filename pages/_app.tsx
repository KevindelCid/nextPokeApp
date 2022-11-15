import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeButton from '../components/ThemeButton'

export default function App({ Component, pageProps }: AppProps) {





  return <section className='
  bg-slate-300 
  dark:bg-slate-800 
  min-h-screen 
  dark:text-slate-300
  transition duration-300 ease-out
  '>

    <ThemeButton />

    <Component {...pageProps} />
  </section>
}
