import { EthereumLogo } from "../logos/Ethereum";
import { OpenSeaLogo } from "../logos/OpenSea";
import { TensorflowLogo } from "../logos/tensorflow";
import { VercelLogo } from "../logos/Vercel";

export const PowerBy = () => (
    <>
        <p className="mb-12 text-center text-lg md:text-xl">
            <span className="text-primary-text">
                Powered by the best technologies and frameworks in the world.
            </span>
        </p>
        <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
            { /* SVG logos */}
            <TensorflowLogo />
            <VercelLogo />
            <OpenSeaLogo />
            <EthereumLogo />
        </div>
    </>
);