import { Container } from '../components/container'
import { Hero, HeroTitle, HeroSubtitle } from '../components/hero'

export default function HomePage() {
    return (
        <Container>
            <Hero>
                <HeroTitle>
                    DeepBlue Labs
                </HeroTitle>
                <HeroSubtitle>
                    DeepBlue Labs is an independent research lab focused on <br />exploring and developing new solutions in the field of AI and web 3.0.
                </HeroSubtitle>
            </Hero>
        </Container>
    );
}