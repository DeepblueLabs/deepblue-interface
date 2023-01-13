import Image from 'next/image'
import team from '../illustrations/team.png'
import { Container } from '../container'

export const About = () => (
    <div className='text-grey-dark' id='about'>
        <Container>
            <div className="text-center" id="projects">
                <h2 className="mb-4 text-4xl md:text-6xl">About us</h2>
                <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
                    Meet DeepBlue Labs and our team, collaborators, and advisors.
                </p>
                <Image
                    src={team}
                    width={1200}
                    height={800}
                    alt=""
                />
            </div>
            <div className='mt-12 mx-auto max-w-[68rem]'>
                <p className='text-md text-primary-text '>
                    Our team includes well-known developers, core members of public chains and other infrastructure projects,
                    and experts in blockchain governance and economic architecture. Many of our team members come from crypto companies,
                    giving us strong expertise in the creation and development of blockchain projects.
                    <br className='hidden md:inline-block' />
                    <br className='hidden md:inline-block' />
                    As a team, we are dedicated to creating innovative projects that utilize the power of web 3.0 technologies.
                    With SharkPunks, we aim to bring together a community of collectors and investors who share our passion for
                    technology and innovation. We look forward to working with our community to build and grow SharkPunks into
                    a successful and impactful project.
                    <br className='hidden md:inline-block' />
                    <br className='hidden md:inline-block' />
                    With a focus on creating projects that are both functional and aesthetically pleasing, we strive to deliver
                    exceptional value to our clients and users. We invite you to learn more about our company and to join us on
                    this exciting journey towards the next evolution of the web. Together, we can build a brighter future for
                    the internet and the world at large
                </p>
            </div>
        </Container>
    </div>
)