"use client"

import { useLanguage } from "@/context/languageContext";
import { Orbitron, Press_Start_2P } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const PressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ["400"] });
const orbitron = Orbitron({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800', '900'] })

export default function FortePage(){
    const { language } = useLanguage();

    return (
        <div className="w-screen h-screen overflow-hidden flex flex-col forte-results-page">
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
                            FORTE
                        </h1>
                        <Image 
                            src={'/forte.png'}
                            alt="forte"
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
                        Kamu adalah seorang <span className={`font-black text-md text-shadow-lg text-shadow-white`}>Forte</span>
                    </h3>
                    <p className={`${orbitron.className} text-md text-white font-medium mb-12`}>
                        Clan <span className="font-black">Forte</span> adalah simbol kekuatan fisik dan ketahanan. Mereka adalah prajurit-prajurit terlatih yang siap menghadapi tantangan secara langsung dan mengandalkan kekuatan tubuh serta keberanian untuk mengatasi setiap rintangan. Bagi mereka, pertarungan bukan hanya soal kekuatan fisik, tetapi juga tentang keteguhan hati dan semangat juang yang tidak pernah pudar. Anggota Forte adalah individu yang sangat menghargai kekuatan pribadi, ketahanan, dan kepercayaan diri dalam menghadapi situasi sulit. Mereka seringkali menjadi barisan depan dalam pertempuran, mengutamakan tindakan langsung dan keberanian untuk bertindak.
                    </p>

                    <h3 className={`${orbitron.className} text-3xl text-white font-black text-shadow-sm text-shadow-white mb-4`}>
                        Karakteristik
                    </h3>
                    <ul className={`list-disc list-inside ${orbitron.className} text-md text-white font-medium mb-12`}>
                        <li>Memiliki kekuatan fisik yang luar biasa dan keterampilan bertarung.</li>
                        <li>Menghadapi tantangan secara langsung dengan keteguhan hati.</li>
                        <li>Lebih cenderung untuk beraksi daripada menganalisis masalah secara panjang lebar.</li>
                        <li>Menilai kemenangan sebagai hasil dari ketangguhan fisik dan semangat juang yang tidak kenal lelah.</li>
                    </ul>
                    
                    <h3 className={`${orbitron.className} text-3xl text-white font-black text-shadow-sm text-shadow-white mb-4`}>
                        Filosofi
                    </h3>
                    <p className={`${orbitron.className} text-md text-white font-medium mb-12`}>
                        Bagi Forte, kekuatan fisik adalah segalanya. Mereka percaya bahwa untuk mempertahankan kebebasan dan kehormatan, seseorang harus memiliki ketahanan fisik yang mampu bertahan di medan perang dan mengalahkan musuh dengan tangan mereka sendiri. Bagi mereka, pertempuran adalah bagian dari identitas mereka.
                    </p>
                    
                    <h3 className={`${orbitron.className} text-3xl text-white font-black text-shadow-sm text-shadow-white mb-4`}>
                        Prinsip
                    </h3>
                    <p className={`${orbitron.className} text-md text-white font-medium mb-12`}>
                        Yesaya 40:31 (TB)  tetapi orang-orang yang menanti-nantikan TUHAN mendapat kekuatan baru: mereka seumpama rajawali yang naik terbang dengan kekuatan sayapnya; mereka berlari dan tidak menjadi lesu, mereka berjalan dan tidak menjadi lelah.
                    </p>
                </div>
            </div>
        </div>
    );
}
