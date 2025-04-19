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

export default function PhilosPage(){
    const router = useRouter()
    const { language } = useLanguage()
    const { clanResult } = useClanResult()

    return (
        <div className="overflow-x-auto">
            <div className="w-full min-h-screen lg:h-screen lg:overflow-hidden flex flex-col philos-results-page">
                <div className="stars"></div>
                {Array(16).fill(0).map((_, index) => (
                    <div key={index} className="shooting-star"></div>
                ))}

                {/* Header */}
                <div className="w-full flex justify-center items-center gap-2 py-2 shrink-0 bg-black">
                    <Image src={'/jc-logo.png'} alt="jc logo" width={50} height={50} />
                    <Image src={'/resonate-logo.png'} alt="resonate logo" width={200} height={60} className="max-w-[150px] sm:max-w-[200px]" />
                </div>

                {/* Main content */}
                <div className="flex flex-col lg:flex-row flex-1 lg:overflow-hidden mt-3">
                    {/* Character card */}
                    <div className="w-full lg:w-[40%] p-3 sm:p-5 flex justify-center mb-4 lg:mb-0 shrink-0">
                        <div className="border-4 border-white flex flex-col items-center rounded-xl shadow-[0_0_20px_white] px-3 sm:px-5 py-4 sm:py-8">
                            <h1 className={`${PressStart2P.className} text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-shadow-lg text-shadow-white`}>
                                PHILOS
                            </h1>
                            <Image 
                                src={'/philos.png'}
                                alt="philos"
                                width={350}
                                height={350}
                                className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[350px]"
                            />
                            <h2 className={`${PressStart2P.className} text-white text-xs sm:text-sm md:text-xl lg:text-2xl text-shadow-lg text-shadow-black text-center mt-2`}>
                                {language === 'en' ? 'Connector and Unifier' : 'Penghubung dan Pemersatu'}
                            </h2>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="flex-1 lg:overflow-y-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 pb-8 lg:pb-16">
                        <h3 className={`${orbitron.className} text-xl sm:text-2xl lg:text-3xl text-white font-medium text-shadow-lg text-shadow-white mb-4 lg:mb-8`}>
                            {
                                clanResult === 'philos'
                                ? language === 'en'
                                    ? <>You Are a <span className="font-black text-shadow-lg text-shadow-white">Philos</span></>
                                    : <>Kamu Adalah Seorang <span className="font-black text-shadow-lg text-shadow-white">Philos</span></>
                                : language === 'en'
                                    ? <><span className="font-black">Description</span></>
                                    : <><span className="font-black">Deskripsi</span></>
                            }
                        </h3>

                        <p className={`${orbitron.className} text-sm sm:text-base lg:text-md text-white font-medium mb-6 lg:mb-12`}>
                            {
                                language === 'en'
                                ? <>
                                    The <span className="font-black">Philos</span> clan is known for their spirit of unity. Members of Philos focus on building strong relationships between individuals and groups, always striving to maintain togetherness even in high-pressure situations. They prefer working with others and believe that the strength of a community lies in solidarity and emotional support. In the battlefield, they are the encouragers and soul protectors of the troops, keeping fighting spirit alive and morale high. They don’t see victory solely in physical or intellectual terms but value emotional connection and human relationships.
                                </>
                                : <>
                                    Clan <span className="font-black">Philos</span> dikenal karena semangat persatuan mereka. Anggota Philos berfokus pada membangun hubungan yang kuat antara individu dan kelompok, selalu berusaha menjaga kebersamaan meski dalam kondisi yang penuh tekanan. Mereka lebih suka bekerja dengan orang lain dan percaya bahwa kekuatan sebuah komunitas terletak pada solidaritas dan dukungan emosional. Dalam dunia peperangan, mereka adalah penyemangat dan pelindung jiwa dari pasukan, menjaga fighting spirit tetap hidup dan menjaga moral tetap tinggi. Mereka tidak hanya melihat kemenangan dari sisi fisik atau intelektual, tetapi dari sisi emosional dan hubungan antar manusia.
                                </>
                            }
                        </p>

                        <h3 className={`${orbitron.className} text-xl sm:text-2xl lg:text-3xl text-white font-black mb-2 lg:mb-4`}>
                            {language === 'en' ? 'Characteristics' : 'Karakteristik'}
                        </h3>
                        <ul className={`list-disc list-inside ${orbitron.className} text-sm sm:text-base lg:text-md text-white font-medium mb-6 lg:mb-12`}>
                            {
                                language === 'en'
                                ? <>
                                    <li>Highly empathetic and concerned about others&apos; well-being.</li>
                                    <li>Focus on building relationships and teamwork.</li>
                                    <li>Tend to be mediators or conflict resolvers in a group.</li>
                                    <li>Capable of maintaining high morale during tough situations.</li>
                                </>
                                : <>
                                    <li>Memiliki empati yang tinggi dan peduli terhadap kesejahteraan orang lain.</li>
                                    <li>Fokus pada membangun hubungan dan kerja sama tim.</li>
                                    <li>Cenderung menjadi mediator atau penyelesai konflik dalam kelompok.</li>
                                    <li>Mampu menjaga semangat dan moral tinggi dalam situasi yang sulit.</li>
                                </>
                            }
                        </ul>

                        <h3 className={`${orbitron.className} text-xl sm:text-2xl lg:text-3xl text-white font-black mb-2 lg:mb-4`}>
                            {language === 'en' ? 'Philosophy' : 'Filosofi'}
                        </h3>
                        <p className={`${orbitron.className} text-sm sm:text-base lg:text-md text-white font-medium mb-6 lg:mb-12`}>
                            {
                                language === 'en'
                                ? `For Philos, without a strong emotional bond, there is no true victory. They believe that only through unity and mutual support can they achieve real freedom. For them, togetherness is the foundation of strength.`
                                : `Bagi Philos, tanpa ikatan emosional yang kuat, tidak ada yang bisa disebut sebagai kemenangan sejati. Mereka percaya bahwa hanya melalui persatuan dan saling mendukung, mereka bisa meraih kebebasan sejati. Untuk mereka, kebersamaan adalah fondasi dari kekuatan.`
                            }
                        </p>

                        <h3 className={`${orbitron.className} text-xl sm:text-2xl lg:text-3xl text-white font-black mb-2 lg:mb-4`}>
                            {language === 'en' ? 'Principle' : 'Prinsip'}
                        </h3>
                        <p className={`${orbitron.className} text-sm sm:text-base lg:text-md text-white font-medium mb-6 lg:mb-12`}>
                            {language === 'en'
                                ? `Proverbs 4:23 (NIV) — Above all else, guard your heart, for everything you do flows from it.`
                                : `Amsal 4:23 (TB) — Jagalah hatimu dengan segala kewaspadaan, karena dari situlah terpancar kehidupan.`}
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
