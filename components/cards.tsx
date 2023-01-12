import { motion } from 'framer-motion';

const Cards = () => {
    const cards = [
        {
            image: '/projects/img/1.png',
            title: 'Blue Ventures',
            shortDescription: 'DeepCapital is revolutionizing the way fundraising is done by providing a decentralized and transparent platform',
            text: 'DeepCapital is revolutionizing the way fundraising is done by providing a decentralized and transparent platform that aligns stakeholder incentives during and beyond the funding process. With normative compliance, global access to early-stage financing, trustless and automated token transfers, and no upfront or entry fees, DeepCapital offers a more efficient and secure solution for all parties involved.'
        },
        {
            image: '/projects/img/2.png',
            title: 'SharkPunks collection',
            shortDescription: 'SharkPunks, a unique and innovative project that brings together the power of sharks, nature, and finance through the use of non-fungible tokens',
            text: 'SharkPunks, a unique and innovative project that brings together the power of sharks, nature, and finance through the use of non-fungible tokens (NFTs) on the Ethereum blockchain. With a total of 5000 unique pieces, the SharkPunks NFT collection offers proof of ownership for each individual token, ensuring that each one is truly one of a kind.'
        },
        // {
        //     image: '/projects/img/3.png',
        //     title: 'IAeyesNet',
        //     text: 'Lorem impusm'
        // },
        // {
        //     image: '/projects/img/4.png',
        //     title: 'Transformers',
        //     text: 'Lorem impusm'
        // },
    ]

    return (
        <div className='bg-transparent rounded-lg overflow-hidden'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="col-span-1 rounded-lg overflow-hidden shadow-lg my-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <img src={card.image} alt={card.title} className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h2 className="text-lg font-medium text-gray-900">{card.title}</h2>
                            <p className="d-none md:d-block text-sm text-gray-600 mb-8 lg:hidden">{card.shortDescription}</p>
                        </div>
                    </motion.div>
                ))}            
            </div>
        </div>
    )
}

export default Cards;