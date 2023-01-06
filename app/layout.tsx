import { Container } from '../components/container'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import "/styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <meta
                    name='viewport'
                    content='width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0'
                />
            </head>
            <body>
                <div>
                    <Header />
                    <main className='bg-page-gradient pt-navigation-height'>
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}