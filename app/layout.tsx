import { Container } from '../components/container'
import { Header }  from '../components/header'

import "/styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head />
            <body>
                <div>
                    <Header />
                    <main className='pt-[var(--navigation-height)]'>{children}</main>
                    <footer>
                        <Container>Footer here</Container>
                    </footer>
                </div>
            </body>
        </html>
    );
}