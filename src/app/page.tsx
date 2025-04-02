"use client"

import CustomButton from "@/components/CustomButton";
import { Birthstone, Press_Start_2P } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const birthstone = Birthstone({ subsets: ["latin"], weight: ['400'] });

export const PressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ["400"]})

export default function LandingPage(){
    const router = useRouter()
    
    return(
        <div
            className="h-screen w-screen flex items-center justify-evenly bg-cover bg-center" 
            style={{ backgroundImage: "url('/background.png')" }}
        >   
           <div className="relative">
                {/* <div className="absolute inset-0 w-4/5 h-3/4 bg-purple-400 opacity-30 shadow-lg animate-pulse z-0 rounded-full"></div> */}
                <Image
                    src={'/resonate-with-clan-logo.png'}
                    alt="resonate logo"
                    width={600}
                    height={300}
                    className="relative z-10"
                />
            </div>

            <div
                className="flex flex-col items-center"
            >
                <div 
                    className="flex flex-col items-center"
                >
                    <h1 className="font-horizon animated-white-glow text-6xl mb-[-40px] ">
                        FIND YOUR
                    </h1>
                    <h2 className={`${birthstone.className} text-9xl animated-pink-glow rotate-[-6deg]`}>
                        Clan
                    </h2>
                </div>
                <p
                    className={`${PressStart2P.className} text-lg w-[600px] text-center mb-6`}    
                >
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
    )
}