'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Container } from './container';
import { Button } from './button';
import { HamburgerIcon } from './icons/hamburger';
import { Logo } from './icons/logo';

import classNames from 'classnames';

export const Header = () => {
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

    useEffect(() => {
        const html = document.querySelector('html');
        if (html) html.classList.toggle('overflow-hidden', hamburgerMenuIsOpen);
    }, [hamburgerMenuIsOpen]);

    useEffect(() => {
        const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

        window.addEventListener('orientationchange', closeHamburgerNavigation);
        window.addEventListener('resize', closeHamburgerNavigation);

        return () => {
            window.removeEventListener('orientationchange', closeHamburgerNavigation);
            window.removeEventListener('resize', closeHamburgerNavigation);
        };
    }, [setHamburgerMenuIsOpen]);

    return (
        <header className='fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[12px]'>
            <Container className='flex h-navigation-height'>
                <Link className='flex items-center text-md' href='/'>
                    <Logo className='w-[1.8rem] h-[1.8rem] mr-4' /> DeepBlue Labs
                </Link>

                <div
                    className={classNames(
                        'transition-[visible] md:visible',
                        hamburgerMenuIsOpen ? 'visible' : 'delay-500 invisible'
                    )}
                >
                    <nav className={classNames(
                        'fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none',
                        hamburgerMenuIsOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-100vw] opacity-0'
                    )}
                    >
                        <ul className={classNames(
                            "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                            "ease-in [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors [&_a:hover]:text-grey",
                            hamburgerMenuIsOpen && "[&_a]:translate-y-0"
                        )}>
                            <li className='md:hidden lg:block'>
                                <Link href='#'>Projects</Link>
                            </li>
                            <li className='md:hidden lg:block'>
                                <Link href='#'>About</Link>
                            </li>
                            <li className='md:hidden lg:block'>
                                <Link href='#'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='ml-auto h-full flex items-center'>
                    <Link className='mr-6 text-sm' href='#'>Log In</Link>
                    <Button href='#' size='small' variant='primary'>SharkPunks</Button>
                </div>

                <button
                    className="ml-6 md:hidden"
                    onClick={() => setHamburgerMenuIsOpen((open) => !open)}
                >
                    <span className="sr-only">Toggle menu</span>
                    <HamburgerIcon />
                </button>
            </Container>
        </header>
    );
};