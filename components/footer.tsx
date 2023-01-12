import Link from 'next/link';
import { Container } from './container';
import { GithubIcon } from './icons/GithubIcon';
import { Logo } from './icons/logo';
import { TwitterIcon } from './icons/twitterIcon';

const footerLink = [
    {
        title: 'Product',
        links: [
            { title: 'SharkPunks', href: '#' },
            { title: 'IAeyesNet', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { title: 'About', href: '#' },
            { title: 'Blog', href: '#' },
            { title: 'Careers', href: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { title: 'Community', href: '#' },
            { title: 'Contact', href: '#' },
            { title: 'Privacy Policy', href: '#' },
            { title: 'Terms of Service', href: '#' },
        ],
    },
    {
        title: 'Developers',
        links: [
            { title: 'API', href: '#' },
            { title: 'Github', href: '#' },
        ],
    },
]

export const Footer = () => (
    <footer className='mt-12 border-t border-transparent-white py-[5.6rem] text-sm'>
        <Container className='flex flex-col justify-between lg:flex-row'>
            <div>
                <div className='flex h-full flex-row justify-between lg:flex-col' >
                    <div className='flex items-center text-grey'>
                        <Logo className='mr-4 h-4 w-4' />© 2023 DeepBlue Labs.
                    </div>
                    <div className='mt-auto flex space-x-4 text-grey'>
                        < GithubIcon />
                        < TwitterIcon />
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap'>
                {footerLink.map((column) => (
                    <div 
                        key={column.title}
                        className='mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]'>
                        <h3 className='mb-3 font-medium'>{column.title}</h3>
                        <ul>
                            {column.links.map((link) => (
                                <li 
                                    key={link.title}
                                    className='[&_a]:last:mb-0'>
                                    <Link className='mb-3 block text-grey transition-colors hover:text-off-black' href={link.href}>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Container>
    </footer>
);