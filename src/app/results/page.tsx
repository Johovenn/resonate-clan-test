"use client"

import CustomButton from "@/components/CustomButton";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/languageContext";
import { Press_Start_2P } from "next/font/google";
import Image from "next/image"
import { useRouter } from "next/navigation";

const PressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ["400"] });

export default function ResultsPage(){
    const router = useRouter()
    const {language} = useLanguage()

    const characters = [
        { name: "NEURO", image: "/neuro.png", path: "/results/neuro", textShadow: "text-shadow-white" },
        { name: "PHILOS", image: "/philos.png", path: "/results/philos", textShadow: "text-shadow-red-900" },
        { name: "FORTE", image: "/forte.png", path: "/results/forte", textShadow: "text-shadow-green-500" },
        { name: "OCULUS", image: "/oculus.png", path: "/results/oculus", textShadow: "text-shadow-blue-500" }
    ];

    return(
        <div className="overflow-x-auto">
            <div
                className="min-h-screen w-full flex flex-col items-center justify-start bg-cover bg-center px-4 py-8"
                style={{ backgroundImage: "url('/background.png')" }}
            >
                <Image 
                    src={'/resonate-logo.png'}
                    alt="resonate"
                    width={800}
                    height={500}
                    className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[800px] mb-6"
                    priority
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-16 max-w-7xl mx-auto mb-20">
                    {characters.map((character) => (
                        <div 
                            key={character.name}
                            className="flex flex-col items-center justify-center hover:scale-105 transition-all cursor-pointer"
                            onClick={() => router.push(character.path)}
                        >
                            <div className="w-full max-w-[250px]">
                                <Image 
                                    src={character.image}
                                    alt={character.name.toLowerCase()}
                                    width={300}
                                    height={300}
                                    className="w-full"
                                />
                            </div>
                            <p className={`${PressStart2P.className} text-center text-white ${character.textShadow} text-shadow-lg text-xl sm:text-2xl lg:text-3xl mt-2`}>
                                {character.name}
                            </p>
                        </div>
                    ))}
                </div>

                <CustomButton
                    onClick={() => router.push('/')}
                >
                    {language === 'en' ? 'Back to Home' : 'Kembali'}
                </CustomButton>
            </div>
            <Footer />
        </div>
    )
}