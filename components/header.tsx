import Link from 'next/link';
import { Container } from './container';
import { Button } from './button';
import { Logo } from './icons/logo';

export const Header = () => {
    return (
        <header className='fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[12px]'>
            <Container className='flex h-[var(--navigation-height)]'>
                <Link className='flex items-center text-md' href='/'>
                    <Logo className='w-[1.8rem] h-[1.8rem] mr-4' /> DeepBlue Labs
                </Link>

                <nav className='h-full'>
                    <ul className='flex items-center h-full [&_a]:text-sm  [&_a:hover]:text-grey [&_a]:transition-colors [&_li]:ml-6'>
                        <li>
                            <Link href='#'>Projects</Link>
                        </li>
                        <li className='hidden md:block'>
                            <Link href='#'>About</Link>
                        </li>
                        <li className='hidden md:block'>
                            <Link href='#'>Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div className='ml-auto h-full flex items-center'>
                    <Button href='#' classNames='mr-6' variant="primary" size="small" >SharkPunks</Button>
                    <Button href='#' >IAeyesNet</Button>
                </div>
            </Container>
        </header>
    );
};