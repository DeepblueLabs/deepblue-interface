'use client';
import React from 'react';
import Typewriter from 'react-ts-typewriter';
import classNames from 'classnames';
import { Container } from '../components/container'
import { Hero, HeroTitle, HeroSubtitle } from '../components/hero'
import { HeroImage } from '../components/hero-image';

export default function HomePage() {
    return (
        <>
        <div className='overflow-hidden pb-[16.4rem] md:pb-[25.6rem]'>
            <Container className='pt-[6.4rem]'>
                <Hero>
                    <HeroTitle className='animate-fade-in [--animation-delay:200ms]'>
                        DeepBlue Labs
                    </HeroTitle>
                    <HeroSubtitle className='animate-fade-in'>
                        DeepBlue Labs is an independent research lab focused on <br />exploring and developing new solutions in the field of AI and web 3.0.
                    </HeroSubtitle>
                    <HeroImage/>
                </Hero>
            </Container>
        </div>
        </>
    );
}