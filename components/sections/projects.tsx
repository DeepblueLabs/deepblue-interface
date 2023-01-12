export const Projects = () => (
    <div className='text-grey-dark'>
        <div className="text-center">
            <h2 className="text-4xl md:text-7xl">
                Project development
            </h2>
            <p className="mx-auto max-w-[68rem] text-lg text-primary-text md:text-xl my-6">
                We are a team of developers who are passionate about creating
                <br className='hidden md:inline-block' />
                AI and blockchain application.
            </p>
        </div>
        <div className="flex flex-wrap gap-6">
            <div className="basis-[calc(66.66%-12px)] bg-glass-gradient p-8 md:p-14 rounded-[4.8rem] border border-transparent-white">
                <p className="text-3xl">BlueVentures</p>
                <p className="text-md text-primary-text">
                    BlueVentures is a decentralized protocol enabling fundraising in a transparent, compliant and efficient manner.
                </p>
            </div>
            <div className="basis-[calc(33.33%-12px)] bg-glass-gradient p-8 md:p-14 rounded-[4.8rem] border border-transparent-white">
                <p className="text-3xl">Security</p>
                <p className="text-md text-primary-text">
                    Built on Ethereum, scalability and security for our users.
                </p>
            </div>
            <div className="basis-[calc(33.33%-12px)] bg-glass-gradient p-8 md:p-14 rounded-[4.8rem] border border-transparent-white">
                <p className="text-3xl">Get your role</p>
                <p className="text-md text-primary-text">
                    Each owner can participate in the BlueVentures governance DAO.
                    Become an angel investor in successful projects chosen by the organization.
                </p>
            </div>
            <div className="basis-[calc(66.66%-12px)] bg-glass-gradient p-8 md:p-14 rounded-[4.8rem] border border-transparent-white">
                <p className="text-3xl">SharkPunks</p>
                <p className="text-md text-primary-text">
                    SharkPunks, a unique and innovative project that brings together the power of sharks,
                    nature, and finance through the use of non-fungible tokens (NFTs) on the Ethereum blockchain.
                    With a total of 5000 unique pieces, the SharkPunks NFT collection offers proof of ownership
                    for each individual token, ensuring that each one is truly one of a kind.
                </p>
            </div>
        </div>
    </div>
)