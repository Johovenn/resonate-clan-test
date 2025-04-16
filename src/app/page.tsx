"use client"

import CustomButton from "@/components/CustomButton"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import { useClanResult } from "@/context/clanResultContext"
import { useLanguage } from "@/context/languageContext"
import { Birthstone, Press_Start_2P } from "next/font/google"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const birthstone = Birthstone({ subsets: ["latin"], weight: ['400'] })
const PressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ["400"] })

export default function LandingPage() {
    const router = useRouter()
    const {language} = useLanguage()
    const {clanResult, setClanResult} = useClanResult()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        if (typeof window !== 'undefined') {
            const savedClan = localStorage.getItem('userClanResult')
            if (savedClan) {
                setClanResult(savedClan)
            }
        }
    }, [setClanResult])

    const buttonText = clanResult 
        ? (language === 'en' ? 'See Results' : 'Lihat Hasil')
        : (language === 'en' ? 'Begin Test' : 'Mulai Tes');
    
    return (
        <div
            className="h-screen w-screen flex flex-col xl:flex-row items-center justify-evenly bg-cover bg-center px-4 py-8"
            style={{ backgroundImage: "url('/background.png')" }}
        >
            <div className="relative mb-8 xl:mb-0">
                <Image
                    src={'/resonate-with-clan-logo.png'}
                    alt="resonate logo"
                    width={800}
                    height={300}
                    className="relative z-10 w-full max-w-[720px] h-auto"
                />
            </div>
            <div className="flex flex-col items-center">
                <Image
                    src={'/jc-logo.png'}
                    alt="jc logo"
                    width={80}
                    height={80}
                    className="relative z-10 w-full max-w-[70px] h-auto mb-10"
                />
                <div className="flex flex-col items-center">
                    <h1 className="font-horizon animated-white-glow text-white text-2xl sm:text-3xl md:text-4xl mb-[-20px] sm:mb-[-30px] md:mb-[-40px] z-10">
                        {language === 'en' ? 'WHICH CLAN' : 'TEMUKAN'}
                    </h1>
                    <h2 className={`${birthstone.className} text-6xl text-white sm:text-7xl md:text-8xl lg:text-9xl animated-pink-glow rotate-[-6deg]`}>
                        {language === 'en' ? 'are you?' : 'clan-mu!'}
                    </h2>
                </div>
                <p className={`${PressStart2P.className} text-xs text-white sm:text-sm md:text-base lg:text-lg w-full max-w-[600px] text-center mt-12 mb-6 px-4`}>
                    Hey, Resonians!
                    <br />
                    {language === 'en' ? 'Find the right clan for you now!' : 'Temukan clan yang cocok denganmu!'}
                </p>
                <CustomButton
                    onClick={() => {
                        if(clanResult){
                            router.push(`/results/${clanResult}`)
                        }
                        else{
                            router.push('/clan-test')
                        }
                    }}
                    className="mb-9"
                >
                    {buttonText}
                </CustomButton>
                {mounted && <LanguageSwitcher />}
            </div>
        </div>
    )
}