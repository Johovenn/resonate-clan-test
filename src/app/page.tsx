"use client"

import CustomButton from "@/components/CustomButton";
import { Birthstone, Press_Start_2P } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

const birthstone = Birthstone({ subsets: ["latin"], weight: ['400'] });
const PressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ["400"] });

export default function LandingPage() {
    const router = useRouter();
    
    return (
        <div
            className="h-screen w-screen flex flex-col xl:flex-row items-center justify-evenly bg-cover bg-center px-4 py-8"
            style={{ backgroundImage: "url('/background.png')" }}
        >
            <div className="relative mb-8 xl:mb-0">
                <Image
                    src={'/resonate-with-clan-logo.png'}
                    alt="resonate logo"
                    width={600}
                    height={300}
                    className="relative z-10 w-full max-w-[600px] h-auto"
                />
            </div>

            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <h1 className="font-horizon md:animated-white-glow text-white text-4xl sm:text-5xl md:text-6xl mb-[-20px] sm:mb-[-30px] md:mb-[-40px]">
                        FIND YOUR
                    </h1>
                    <h2 className={`${birthstone.className} text-6xl text-white sm:text-7xl md:text-8xl lg:text-9xl animated-pink-glow rotate-[-6deg]`}>
                        Clan
                    </h2>
                </div>
                <p className={`${PressStart2P.className} text-xs text-white sm:text-sm md:text-base lg:text-lg w-full max-w-[600px] text-center mb-6 px-4`}>
                    Hey, Resonians!
                    <br />
                    Find the right clan for you now!
                </p>
                <CustomButton
                    onClick={() => {router.push('/clan-test')}}
                >
                    Begin Test
                </CustomButton>
            </div>
        </div>
    );
}