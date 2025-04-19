"use client"

import { useClanResult } from "@/context/clanResultContext";
import { useLanguage } from "@/context/languageContext";
import { Orbitron, Press_Start_2P } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const PressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ["400"] });
const orbitron = Orbitron({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800', '900'] })

export default function NeuroPage(){
    const { language } = useLanguage()
    const {clanResult} = useClanResult()

    return (
        <div className="w-full min-h-screen lg:h-screen lg:overflow-hidden flex flex-col neuro-results-page">
            <div className="stars"></div>
            {/* Shooting stars */}
            {Array(16).fill(0).map((_, index) => (
                <div key={index} className="shooting-star"></div>
            ))}

            {/* Header - Fixed */}
            <div className="w-full flex justify-center items-center gap-2 py-2 shrink-0">
                <Image src={'/jc-logo.png'} alt="jc logo" width={50} height={50} />
                <Image src={'/resonate-logo.png'} alt="resonate logo" width={200} height={60} className="max-w-[150px] sm:max-w-[200px]" />
            </div>

            {/* Navigation - Fixed */}
            <Link
                href={'/results'}  
                className={`${PressStart2P.className} w-full py-2 flex justify-center transition-all text-white text-shadow-lg text-shadow-white text-center text-xs sm:text-sm shrink-0`}
            >
                {language === 'en' ? 'Check out other clans' : 'Lihat tentang clan lainnya'}
            </Link>

            {/* Main content - Changes based on screen size */}
            <div className="flex flex-col lg:flex-row flex-1 lg:overflow-hidden">
                {/* Character card - Scrollable on mobile, fixed on desktop */}
                <div className="w-full lg:w-[40%] p-3 sm:p-5 flex justify-center mb-4 lg:mb-0 shrink-0">
                    <div className="border-4 border-white flex flex-col items-center rounded-xl shadow-[0_0_20px_white] px-3 sm:px-5 py-4 sm:py-8">
                        <h1 className={`${PressStart2P.className} text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-shadow-lg text-shadow-white`}>
                            NEURO
                        </h1>
                        <Image 
                            src={'/neuro.png'}
                            alt="neuro"
                            width={350}
                            height={350}
                            className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[350px]"
                        />
                        <h2 className={`${PressStart2P.className} text-white text-xs sm:text-sm md:text-xl lg:text-2xl text-shadow-lg text-shadow-black text-center mt-2`}>
                            {language === 'en' ? 'Strategic Thinker and Tech Master' : 'Pemikir Strategis dan Ahli Teknologi'}
                        </h2>
                    </div>
                </div>

                {/* Description - Always scrollable but contained differently based on screen size */}
                <div className="flex-1 lg:overflow-y-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 pb-8 lg:pb-16">
                <h3 className={`${orbitron.className} text-xl sm:text-2xl lg:text-3xl text-white font-medium text-shadow-lg text-shadow-white mb-4 lg:mb-8`}>
                    {
                        clanResult === 'neuro'
                        ?
                            <>You are a <span className={`font-black text-shadow-lg text-shadow-white`}>Neuro</span></>
                        :
                            <><span className={`font-black text-shadow-lg text-shadow-white`}>Description</span></>
                    }
                </h3>
                <p className={`${orbitron.className} text-sm sm:text-base lg:text-md text-white font-medium mb-6 lg:mb-12`}>
                    {language === 'en' ? (
                        <>
                            The <span className="font-black">Neuro</span> clan is a group of intellectuals and thinkers highly skilled in science, technology, and strategy. They are leaders who can see the bigger picture and think far ahead, using logic and analysis to solve problems. A Neuro member is someone who tends to think deeply and relies on intelligence to create innovative solutions. In an uncertain world, they are the ones who carefully plan and anticipate the next steps with precise detail.
                        </>
                    ) : (
                        <>
                            Clan <span className="font-black">Neuro</span> adalah kelompok para intelektual dan pemikir yang sangat terampil dalam bidang sains, teknologi, dan strategi. Mereka adalah para pemimpin yang dapat melihat gambaran besar dan berpikir jauh ke depan, menggunakan logika dan analisis untuk memecahkan masalah. Seorang anggota Neuro adalah sosok yang cenderung mendalam dalam pemikiran dan mengandalkan kecerdasan untuk menciptakan solusi inovatif. Dalam dunia yang penuh ketidakpastian, mereka adalah orang-orang yang mampu merencanakan dengan hati-hati dan mengantisipasi langkah-langkah berikutnya dengan detail yang presisi.
                        </>
                    )}
                </p>

                <h3 className={`${orbitron.className} text-xl sm:text-2xl lg:text-3xl text-white font-black text-shadow-sm text-shadow-white mb-2 lg:mb-4`}>
                    {language === 'en' ? 'Characteristics' : 'Karakteristik'}
                </h3>
                <ul className={`list-disc list-inside ${orbitron.className} text-sm sm:text-base lg:text-md text-white font-medium mb-6 lg:mb-12`}>
                    {language === 'en' ? (
                        <>
                            <li>Possesses sharp and logical analytical thinking.</li>
                            <li>Skilled in designing data- and technology-based solutions.</li>
                            <li>Prefers to solve problems in a systematic and structured way.</li>
                            <li>Capable of identifying new opportunities and planning long term.</li>
                        </>
                    ) : (
                        <>
                            <li>Memiliki pemikiran analitis yang tajam dan logis.</li>
                            <li>Terampil dalam merancang solusi berbasis data dan teknologi.</li>
                            <li>Lebih suka memecahkan masalah dengan cara yang sistematis dan terstruktur.</li>
                            <li>Memiliki kemampuan untuk mengidentifikasi peluang baru dan merencanakan jangka panjang.</li>
                        </>
                    )}
                </ul>

                <h3 className={`${orbitron.className} text-xl sm:text-2xl lg:text-3xl text-white font-black text-shadow-sm text-shadow-white mb-2 lg:mb-4`}>
                    {language === 'en' ? 'Philosophy' : 'Filosofi'}
                </h3>
                <p className={`${orbitron.className} text-sm sm:text-base lg:text-md text-white font-medium mb-6 lg:mb-12`}>
                    {language === 'en' ? (
                        <>
                            For Neuro, technology and knowledge are the main keys to achieving victory. They believe that with intelligence, almost anything is possible. They play a crucial role in both warfare and development, often acting as the brains behind an organization or group that leads with deep strategy.
                        </>
                    ) : (
                        <>
                            Bagi Neuro, teknologi dan pengetahuan adalah kunci utama dalam mencapai kemenangan. Mereka percaya bahwa dengan kecerdasan, hampir segala sesuatu dapat dicapai. Mereka memiliki peran yang sangat penting dalam dunia peperangan dan pembangunan, seringkali bertindak sebagai otak dari sebuah organisasi atau kelompok yang memimpin dengan strategi yang mendalam.
                        </>
                    )}
                </p>

                <h3 className={`${orbitron.className} text-xl sm:text-2xl lg:text-3xl text-white font-black text-shadow-sm text-shadow-white mb-2 lg:mb-4`}>
                    {language === 'en' ? 'Principle' : 'Prinsip'}
                </h3>
                <p className={`${orbitron.className} text-sm sm:text-base lg:text-md text-white font-medium mb-6 lg:mb-12`}>
                    {language === 'en'
                        ? 'Romans 12:2 (NIV) — Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—His good, pleasing and perfect will.'
                        : 'Roma 12:2 (TB)  Janganlah kamu menjadi serupa dengan dunia ini, tetapi berubahlah oleh pembaharuan budimu, sehingga kamu dapat membedakan manakah kehendak Allah: apa yang baik, yang berkenan kepada Allah dan yang sempurna.'
                    }
                </p>

                </div>
            </div>
        </div>
    );
}