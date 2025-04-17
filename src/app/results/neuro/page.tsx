"use client"

import { useLanguage } from "@/context/languageContext";
import { Orbitron, Press_Start_2P } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const PressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ["400"] });
const orbitron = Orbitron({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800', '900'] })

export default function NeuroPage(){
    const { language } = useLanguage();

    return (
        <div className="w-screen h-screen overflow-hidden flex flex-col neuro-results-page">
            <div className="stars"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>

            <div className="w-full flex justify-center items-center gap-2 py-2 shrink-0">
                <Image src={'/jc-logo.png'} alt="jc logo" width={50} height={50} />
                <Image src={'/resonate-logo.png'} alt="resonate logo" width={200} height={60} />
            </div>

            <Link
                href={'/results'}  
                className={`${PressStart2P.className} w-full py-2 flex justify-center transition-all text-white text-shadow-lg text-shadow-white text-center text-sm shrink-0`}
            >
                {language === 'en' ? 'Check out other clans' : 'Lihat tentang clan lainnya'}
            </Link>

            <div className="flex flex-1 min-h-0">
                <div className="w-[40%] p-5 flex justify-center">
                    <div className="border-4 border-white flex flex-col items-center rounded-xl shadow-[0_0_20px_white] px-5 py-8">
                        <h1 className={`${PressStart2P.className} text-white text-5xl text-shadow-lg text-shadow-white`}>
                            NEURO
                        </h1>
                        <Image 
                            src={'/neuro.png'}
                            alt="neuro"
                            width={350}
                            height={350}
                        />
                        <h2 className={`${PressStart2P.className} text-white text-2xl text-shadow-lg text-shadow-black text-center`}>
                            {language === '' ? 'Strategic Thinker and Tech Master' : 'Pemikir Strategis dan Ahli Teknologi'}
                        </h2>
                    </div>
                </div>

                <div className="flex-1 h-full overflow-y-auto scroll-smooth px-12 py-8">
                    <h3 className={`${orbitron.className} text-3xl text-white font-medium text-shadow-lg text-shadow-white mb-8`}>
                        Kamu adalah seorang <span className={`font-black text-md text-shadow-lg text-shadow-white`}>Neuro</span>
                    </h3>
                    <p className={`${orbitron.className} text-md text-white font-medium mb-12`}>
                        Clan <span className="font-black">Neuro</span> adalah kelompok para intelektual dan pemikir yang sangat terampil dalam bidang sains, teknologi, dan strategi. Mereka adalah para pemimpin yang dapat melihat gambaran besar dan berpikir jauh ke depan, menggunakan logika dan analisis untuk memecahkan masalah. Seorang anggota Neuro adalah sosok yang cenderung mendalam dalam pemikiran dan mengandalkan kecerdasan untuk menciptakan solusi inovatif. Dalam dunia yang penuh ketidakpastian, mereka adalah orang-orang yang mampu merencanakan dengan hati-hati dan mengantisipasi langkah-langkah berikutnya dengan detail yang presisi.
                    </p>

                    <h3 className={`${orbitron.className} text-3xl text-white font-black text-shadow-sm text-shadow-white mb-4`}>
                        Karakteristik
                    </h3>
                    <ul className={`list-disc list-inside ${orbitron.className} text-md text-white font-medium mb-12`}>
                        <li>Memiliki pemikiran analitis yang tajam dan logis.</li>
                        <li>Terampil dalam merancang solusi berbasis data dan teknologi.</li>
                        <li>Lebih suka memecahkan masalah dengan cara yang sistematis dan terstruktur.</li>
                        <li>Memiliki kemampuan untuk mengidentifikasi peluang baru dan merencanakan jangka panjang.</li>
                    </ul>
                    
                    <h3 className={`${orbitron.className} text-3xl text-white font-black text-shadow-sm text-shadow-white mb-4`}>
                        Filosofi
                    </h3>
                    <p className={`${orbitron.className} text-md text-white font-medium mb-12`}>
                        Bagi Neuro, teknologi dan pengetahuan adalah kunci utama dalam mencapai kemenangan. Mereka percaya bahwa dengan kecerdasan, hampir segala sesuatu dapat dicapai. Mereka memiliki peran yang sangat penting dalam dunia peperangan dan pembangunan, seringkali bertindak sebagai otak dari sebuah organisasi atau kelompok yang memimpin dengan strategi yang mendalam.
                    </p>
                    
                    <h3 className={`${orbitron.className} text-3xl text-white font-black text-shadow-sm text-shadow-white mb-4`}>
                        Prinsip
                    </h3>
                    <p className={`${orbitron.className} text-md text-white font-medium mb-12`}>
                        Roma 12:2 (TB)  Janganlah kamu menjadi serupa dengan dunia ini, tetapi berubahlah oleh pembaharuan budimu, sehingga kamu dapat membedakan manakah kehendak Allah: apa yang baik, yang berkenan kepada Allah dan yang sempurna.
                    </p>
                </div>
            </div>
        </div>
    );
}
