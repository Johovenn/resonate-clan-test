"use client"

import { useLanguage } from "@/context/languageContext";
import { Orbitron, Press_Start_2P } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const PressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ["400"] });
const orbitron = Orbitron({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800', '900'] })

export default function OculusPage(){
    const { language } = useLanguage();

    return (
        <div className="w-screen h-screen overflow-hidden flex flex-col oculus-results-page">
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
                            OCULUS
                        </h1>
                        <Image 
                            src={'/oculus.png'}
                            alt="oculus"
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
                        Kamu adalah seorang <span className={`font-black text-md text-shadow-lg text-shadow-white`}>Oculus</span>
                    </h3>
                    <p className={`${orbitron.className} text-md text-white font-medium mb-12`}>
                        Clan <span className="font-black">Oculus</span> dikenal karena kemampuan luar biasa mereka dalam mengamati dan menganalisis situasi dengan sangat tajam. Mereka memiliki indra yang jauh lebih tajam dari orang biasa, terutama dalam hal penglihatan. Anggota Oculus mampu melihat hal-hal yang tersembunyi atau tidak terlihat oleh orang lain, menjadikan mereka ahli dalam pengintaian, strategi lapangan, dan analisis pertempuran. Dengan kemampuan mereka untuk melihat jauh ke depan dan menangkap gerakan halus di sekitar mereka, Oculus sering kali berada di garis depan dalam hal merencanakan taktik dan memprediksi langkah lawan. Mereka bukan hanya pengamat, tetapi perancang strategi yang jenius.
                    </p>

                    <h3 className={`${orbitron.className} text-3xl text-white font-black text-shadow-sm text-shadow-white mb-4`}>
                        Karakteristik
                    </h3>
                    <ul className={`list-disc list-inside ${orbitron.className} text-md text-white font-medium mb-12`}>
                        <li>Memiliki kemampuan pengamatan yang sangat tajam dan analitis.</li>
                        <li>Suka merencanakan dan menganalisis berbagai kemungkinan.</li>
                        <li>Cenderung melihat setiap detail dan menyusun strategi berdasarkan informasi yang sangat terperinci.</li>
                        <li>Sangat efektif dalam peran pengintaian, perencanaan taktik, dan strategi lapangan.</li>
                    </ul>
                    
                    <h3 className={`${orbitron.className} text-3xl text-white font-black text-shadow-sm text-shadow-white mb-4`}>
                        Filosofi
                    </h3>
                    <p className={`${orbitron.className} text-md text-white font-medium mb-12`}>
                        Bagi Oculus, kemenangan datang dari kemampuan untuk melihat lebih jauh dan lebih tajam dari orang lain. Mereka percaya bahwa dengan memperhatikan setiap detail kecil dan memanfaatkan pengamatan yang jeli, mereka dapat merancang taktik yang membawa perubahan besar dalam peperangan atau situasi sulit lainnya. Mereka adalah ahli dalam membaca situasi dan menangkap celah yang tidak terlihat oleh orang lain.
                    </p>
                    
                    <h3 className={`${orbitron.className} text-3xl text-white font-black text-shadow-sm text-shadow-white mb-4`}>
                        Prinsip
                    </h3>
                    <p className={`${orbitron.className} text-md text-white font-medium mb-12`}>
                        Matius 6:22-23 (TB)  Mata adalah pelita tubuh. Jika matamu baik, teranglah seluruh tubuhmu; jika matamu jahat, gelaplah seluruh tubuhmu. Jadi jika terang yang ada padamu gelap, betapa gelapnya kegelapan itu.
                    </p>
                </div>
            </div>
        </div>
    );
}
