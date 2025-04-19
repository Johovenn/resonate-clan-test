"use client"

import CustomButton from "@/components/CustomButton"
import Footer from "@/components/Footer"
import { useClanResult } from "@/context/clanResultContext"
import { useLanguage } from "@/context/languageContext"
import { Orbitron, Press_Start_2P } from "next/font/google"
import Image from "next/image"
import { useRouter } from "next/navigation"

const PressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ["400"] })
const orbitron = Orbitron({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800', '900'] })

export default function FortePage() {
    const router = useRouter()
    const { language } = useLanguage()
    const { clanResult } = useClanResult()

    return (
        <div className="overflow-x-auto">
            <div className="w-full min-h-screen lg:h-screen lg:overflow-hidden flex flex-col forte-results-page">
                <div className="stars"></div>
                {Array(16).fill(0).map((_, index) => (
                    <div key={index} className="shooting-star"></div>
                ))}

                <div className="w-full flex justify-center items-center gap-2 py-2 shrink-0 bg-black">
                    <Image src={'/jc-logo.png'} alt="jc logo" width={50} height={50} />
                    <Image onClick={() => router.push('/')} src={'/resonate-logo.png'} alt="resonate logo" width={200} height={60} className="max-w-[150px] sm:max-w-[200px]" />
                </div>

                <div className="flex flex-col lg:flex-row flex-1 lg:overflow-hidden">
                    <div className="w-full lg:w-[40%] p-3 sm:p-5 flex justify-center mb-4 lg:mb-0 shrink-0">
                        <div className="border-4 border-white flex flex-col items-center rounded-xl shadow-[0_0_20px_white] px-3 sm:px-5 py-4 sm:py-8">
                            <h1 className={`${PressStart2P.className} text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-shadow-lg text-shadow-white`}>
                                FORTE
                            </h1>
                            <Image
                                src={'/forte.png'}
                                alt="forte"
                                width={350}
                                height={350}
                                className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[350px]"
                            />
                            <h2 className={`${PressStart2P.className} text-white text-xs sm:text-sm md:text-xl lg:text-2xl text-shadow-lg text-shadow-black text-center mt-2`}>
                                {language === 'en' ? 'Physical Strength and Toughness' : 'Kekuatan Fisik dan Ketangguhan'}
                            </h2>
                        </div>
                    </div>

                    <div className="flex-1 lg:overflow-y-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 pb-8 lg:pb-16">
                        <h3 className={`${orbitron.className} text-xl sm:text-2xl lg:text-3xl text-white font-medium mb-4 lg:mb-8`}>
                            {
                                clanResult === 'forte'
                                    ? 
                                    <>
                                        {language === 'en' ? 'You are a ' : 'Kamu adalah seorang'} <span className={`font-black text-shadow-lg text-shadow-white`}>Forte</span>
                                    </>
                                    : <span className={`font-black`}>
                                        {language === 'en' ? 'Description' : 'Deskripsi'}
                                    </span>
                            }
                        </h3>

                        <p className={`${orbitron.className} text-sm sm:text-base lg:text-md text-white font-medium mb-6 lg:mb-12`}>
                            {language === 'en' ? (
                                <>
                                    The <span className="font-black">Forte</span> clan symbolizes physical strength and resilience. They are trained warriors, ready to face challenges head-on and rely on their physical might and courage to overcome any obstacle. For them, battle is not only about physical power, but also about unwavering determination and fighting spirit. Forte members deeply value personal strength, endurance, and confidence when dealing with difficult situations. They are often the frontliners in battle, prioritizing direct action and bravery.
                                </>
                            ) : (
                                <>
                                    Clan <span className="font-black">Forte</span> adalah simbol kekuatan fisik dan ketahanan. Mereka adalah prajurit-prajurit terlatih yang siap menghadapi tantangan secara langsung dan mengandalkan kekuatan tubuh serta keberanian untuk mengatasi setiap rintangan. Bagi mereka, pertarungan bukan hanya soal kekuatan fisik, tetapi juga tentang keteguhan hati dan semangat juang yang tidak pernah pudar. Anggota Forte adalah individu yang sangat menghargai kekuatan pribadi, ketahanan, dan kepercayaan diri dalam menghadapi situasi sulit. Mereka seringkali menjadi barisan depan dalam pertempuran, mengutamakan tindakan langsung dan keberanian untuk bertindak.
                                </>
                            )}
                        </p>

                        <h3 className={`${orbitron.className} text-xl sm:text-2xl lg:text-3xl text-white font-black mb-2 lg:mb-4`}>
                            {language === 'en' ? 'Characteristics' : 'Karakteristik'}
                        </h3>
                        <ul className={`list-disc list-inside ${orbitron.className} text-sm sm:text-base lg:text-md text-white font-medium mb-6 lg:mb-12`}>
                            {language === 'en' ? (
                                <>
                                    <li>Possesses exceptional physical strength and combat skills.</li>
                                    <li>Faces challenges directly with resilience and bravery.</li>
                                    <li>Tends to act rather than overanalyze problems.</li>
                                    <li>Views victory as the result of relentless physical endurance and fighting spirit.</li>
                                </>
                            ) : (
                                <>
                                    <li>Memiliki kekuatan fisik yang luar biasa dan keterampilan bertarung.</li>
                                    <li>Menghadapi tantangan secara langsung dengan keteguhan hati.</li>
                                    <li>Lebih cenderung untuk beraksi daripada menganalisis masalah secara panjang lebar.</li>
                                    <li>Menilai kemenangan sebagai hasil dari ketangguhan fisik dan semangat juang yang tidak kenal lelah.</li>
                                </>
                            )}
                        </ul>

                        <h3 className={`${orbitron.className} text-xl sm:text-2xl lg:text-3xl text-white font-black mb-2 lg:mb-4`}>
                            {language === 'en' ? 'Philosophy' : 'Filosofi'}
                        </h3>
                        <p className={`${orbitron.className} text-sm sm:text-base lg:text-md text-white font-medium mb-6 lg:mb-12`}>
                            {language === 'en' ? (
                                <>
                                    For Forte, physical strength is everything. They believe that to protect freedom and honor, one must have the endurance to survive the battlefield and defeat enemies with their own hands. For them, combat is a part of their identity.
                                </>
                            ) : (
                                <>
                                    Bagi Forte, kekuatan fisik adalah segalanya. Mereka percaya bahwa untuk mempertahankan kebebasan dan kehormatan, seseorang harus memiliki ketahanan fisik yang mampu bertahan di medan perang dan mengalahkan musuh dengan tangan mereka sendiri. Bagi mereka, pertempuran adalah bagian dari identitas mereka.
                                </>
                            )}
                        </p>

                        <h3 className={`${orbitron.className} text-xl sm:text-2xl lg:text-3xl text-white font-black mb-2 lg:mb-4`}>
                            {language === 'en' ? 'Principle' : 'Prinsip'}
                        </h3>
                        <p className={`${orbitron.className} text-sm sm:text-base lg:text-md text-white font-medium mb-6 lg:mb-12`}>
                            {language === 'en'
                                ? `Isaiah 40:31 (NIV) But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.`
                                : `Yesaya 40:31 (TB) tetapi orang-orang yang menanti-nantikan TUHAN mendapat kekuatan baru: mereka seumpama rajawali yang naik terbang dengan kekuatan sayapnya mereka berlari dan tidak menjadi lesu, mereka berjalan dan tidak menjadi lelah.`}
                        </p>

                        <CustomButton
                            onClick={() => router.push(`/results`)}
                        >
                            {language === 'en' ? 'Check out other clans' : 'Lihat clan lainnya'}
                        </CustomButton>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
