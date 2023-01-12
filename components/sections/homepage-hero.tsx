import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";

export const HomepageHero = () => (
  <Hero>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      DeepBlue Labs
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      DeepBlue Labs a research and development lab focused on <br className="hidden md:block" /> developing cutting-edge
      technologies in the fields <br className="hidden md:block" /> web 3.0 and 
      AI    
    </HeroSubtitle>
    <HeroImage />
  </Hero>
);