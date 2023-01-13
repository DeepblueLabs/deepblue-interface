import react from 'react'
import Head from 'next/head'
import '../styles/globals.css'

// Nextjs typescript types

interface AppProps {
    Component: any
    pageProps: any
}

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <title>DeepBlue Labs</title>
            <meta 
                name='description'
                content='🔬 DeepBlue Labs a research and development lab focused on developing cutting-edge technologies in the fields of web 3.0 and artificial intelligence'
            />
            <link rel="stylesheet" href="/logo.svg" />
            <meta name="robots" content="noindex"/>
            <Component {...pageProps} />
        </>
    )
};
export default MyApp;