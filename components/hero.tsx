import Typewriter from 'react-ts-typewriter';
import classNames from 'classnames';

interface HeroProps {
    children: React.ReactNode;
}

interface HeroElementProps {
    children: React.ReactNode;
    className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
    return (
        <h1
            className={classNames(
                "text-gradient my-6 md:text-7xl text-5xl", className
            )}>
                <Typewriter text={`${children}`} cursor={false} speed={60}></Typewriter>
            </h1>
    );
};

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
    return (
        <p
            className={classNames(
                "mb-6 text-lg text-primary-text",
                className
            )}
        >
            {children}
        </p>
    );
};

export const Hero = ({ children }: HeroProps) => {
    return (
        <div className="text-center">
            {children}
        </div>
    );
};