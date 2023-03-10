import Image from 'next/image';

import { SharkPunks } from '../illustrations/sharkpunks';
import { Eth } from '../illustrations/eth';
import { HeroImage } from '../hero-image';
import gradient from '../illustrations/gradient.png';

import { Container } from '../container';

export const Projects = () => (
    <div className='text-grey-dark mb-14' id={"projects"}>
        <Container>
            <div className="text-center">
                <h2 className="mb-4 text-4xl md:text-7xl">
                    Project development
                </h2>
                <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
                    We are a team of developers who are passionate about creating
                    <br className='hidden md:inline-block' />
                    AI and blockchain application.
                </p>
            </div>
        </Container>
        <div className="h-[48rem] overflow-hidden md:h-auto md:overflow-auto">
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-12 md:flex-wrap md:overflow-hidden">
                <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient bg-[#1b0d0f] p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
                    <div className="mask-linear-faded absolute top-[-2.2rem] w-[140%]">
                        <Image src={gradient} alt="gradient" />
                    </div>
                    <div className='absolute'>
                        <p className="mb-4 text-4xl text-white">BlueVentures</p>
                        <p className="text-md text-white px-4">
                            Divide your company into small portions and increase its financing and expansion
                            potential and the development of business plans that require significant amounts of capital.
                        </p>
                    </div>
                </div>
                <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14">
                    <div className="mask-linear-faded absolute top-[1rem]">
                        <Eth />
                    </div>
                    <p className="mb-4 text-4xl">Security</p>
                    <p className="text-md text-primary-text">
                        Built on Ethereum, scalability and security for our users.
                    </p>
                </div>
                <div className="group relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-center overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14">
                    <p className="mb-4 text-4xl">Role</p>
                    <p className="text-md text-primary-text">
                        Each SharkPunk owner can participate in the BlueVentures governance DAO.
                        Become an angel investor in successful projects chosen by the organization.
                    </p>
                </div>
                <div className="group relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient bg-[#1b0d0f] p-8 text-center md:basis-[calc(66.66%-12px)] md:p-14">
                    <div className="mask-linear-faded pointer-events-none absolute top-[-10%] w-[80%]">
                        <SharkPunks />
                    </div>
                    <p className="mb-4 text-4xl absolute text-white">SharkPunks Collection</p>
                    {/* <p className="text-md text-primary-text">
                        SharkPunks, a unique and innovative project that brings together the power of sharks,
                        nature, and finance through the use of non-fungible tokens (NFTs) on the Ethereum blockchain.
                        With a total of 5000 unique pieces, the SharkPunks NFT collection offers proof of ownership
                        for each individual token, ensuring that each one is truly one of a kind.                    </p> */}
                </div>
            </div>
        </div>
    </div>
)