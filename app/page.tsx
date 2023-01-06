import classNames from 'classnames';

import { Container } from '../components/container'
import { Hero, HeroTitle, HeroSubtitle } from '../components/hero'

export default function HomePage() {
    return (
        <>
        <div className='overflow-hidden pb-[16.4rem] md:pb-[25.6rem]'>
            <Container className='pt-[6.4rem]'>
                <Hero>
                    <HeroTitle>
                        DeepBlue Labs
                    </HeroTitle>
                    <HeroSubtitle>
                        DeepBlue Labs is an independent research lab focused on <br />exploring and developing new solutions in the field of AI and web 3.0.
                    </HeroSubtitle>
                </Hero>
            </Container>
        </div>
        <Container>
        </Container>
        </>
    );
}