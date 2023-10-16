import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@/styles/quizzes.css";
import  "@/styles/Card.module.css";


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
