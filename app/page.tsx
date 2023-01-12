'use client'
import classNames from 'classnames';
import { Container } from '../components/container'
import { HomepageHero } from '../components/sections/homepage-hero';
import { PowerBy } from '../components/sections/powerBy';
import { Projects } from '../components/sections/projects';
import { About } from '../components/sections/about';
import { Contact } from '../components/sections/Contact';

export default function HomePage() {
    return (
        <>
            <div className='overflow-hidden pb-[16.4rem] md:pb-[25.6rem]'>
                <Container className='py-[6.4rem]'>
                    <HomepageHero />
                </Container>
                <div>
                    <Container>
                        <PowerBy />
                    </Container>
                    <div
                        className={classNames(
                            "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
                            "[--color:#09ff] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
                            "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[#77bbc6cc] after:bg-background"
                        )}
                    />
                    <Container>
                        <Projects />
                    </Container>
                </div>
            </div>
        </>
    );
}