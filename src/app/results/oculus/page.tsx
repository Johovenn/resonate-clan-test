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

export default function OculusPage(){
    const router = useRouter()
    const { language } = useLanguage()
    const {clanResult} = useClanResult()

    return (
        <div className="overflow-x-auto">
            <div className="w-full min-h-screen lg:h-screen lg:overflow-hidden flex flex-col oculus-results-page">
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
                                OCULUS
                            </h1>
                            <Image 
                                src={'/oculus.png'}
                                alt="oculus"
                                width={350}
                                height={350}
                                className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[350px]"
                            />
                            <h2 className={`${PressStart2P.className} text-white text-xs sm:text-sm md:text-xl lg:text-2xl text-shadow-lg text-shadow-black text-center mt-2`}>
                                {language === 'en' ? 'Strategic Observer with Sharp Instincts' : 'Pengamat Strategis dengan Indra Tajam'}
                            </h2>
                        </div>
                    </div>

                    <div className="flex-1 lg:overflow-y-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 pb-8 lg:pb-16">
                        <h3 className={`${orbitron.className} text-xl sm:text-2xl lg:text-3xl text-white font-medium mb-4 lg:mb-8`}>
                            {
                                clanResult === 'oculus'
                                ? (
                                    language === 'en' 
                                        ? <>You Are an <span className="font-black text-shadow-lg text-shadow-white">Oculus</span></>
                                        : <>Kamu Adalah Seorang <span className="font-black text-shadow-lg text-shadow-white">Oculus</span></>
                                )
                                : (
                                    language === 'en' 
                                        ? <><span className="font-black">Description</span></>
                                        : <><span className="font-black">Deskripsi</span></>
                                )
                            }
                        </h3>

                        <p className={`${orbitron.className} text-sm sm:text-base lg:text-md text-white font-medium mb-6 lg:mb-12`}>
                            {language === 'en' ? (
                                <>
                                    The <span className="font-black">Oculus</span> clan is known for their extraordinary ability to observe and analyze situations with sharp precision. They possess heightened senses, especially sight, enabling them to see things hidden or invisible to others. Oculus members excel in reconnaissance, field strategy, and battle analysis. With their foresight and keen perception, they often lead in planning tactics and predicting enemy moves. They&apos;re not just observers, but brilliant strategists.
                                </>
                            ) : (
                                <>
                                    Clan <span className="font-black">Oculus</span> dikenal karena kemampuan luar biasa mereka dalam mengamati dan menganalisis situasi dengan sangat tajam. Mereka memiliki indra yang jauh lebih tajam dari orang biasa, terutama dalam hal penglihatan. Anggota Oculus mampu melihat hal-hal yang tersembunyi atau tidak terlihat oleh orang lain, menjadikan mereka ahli dalam pengintaian, strategi lapangan, dan analisis pertempuran. Dengan kemampuan mereka untuk melihat jauh ke depan dan menangkap gerakan halus di sekitar mereka, Oculus sering kali berada di garis depan dalam hal merencanakan taktik dan memprediksi langkah lawan. Mereka bukan hanya pengamat, tetapi perancang strategi yang jenius.
                                </>
                            )}
                        </p>

                        <h3 className={`${orbitron.className} text-xl sm:text-2xl lg:text-3xl text-white font-black mb-2 lg:mb-4`}>
                            {language === 'en' ? 'Characteristics' : 'Karakteristik'}
                        </h3>
                        <ul className={`list-disc list-inside ${orbitron.className} text-sm sm:text-base lg:text-md text-white font-medium mb-6 lg:mb-12`}>
                            {language === 'en' ? (
                                <>
                                    <li>Has sharp observational and analytical abilities.</li>
                                    <li>Enjoys planning and analyzing various possibilities.</li>
                                    <li>Focuses on every detail and forms strategies based on thorough information.</li>
                                    <li>Highly effective in roles of reconnaissance, tactical planning, and field strategy.</li>
                                </>
                            ) : (
                                <>
                                    <li>Memiliki kemampuan pengamatan yang sangat tajam dan analitis.</li>
                                    <li>Suka merencanakan dan menganalisis berbagai kemungkinan.</li>
                                    <li>Cenderung melihat setiap detail dan menyusun strategi berdasarkan informasi yang sangat terperinci.</li>
                                    <li>Sangat efektif dalam peran pengintaian, perencanaan taktik, dan strategi lapangan.</li>
                                </>
                            )}
                        </ul>

                        <h3 className={`${orbitron.className} text-xl sm:text-2xl lg:text-3xl text-white font-black mb-2 lg:mb-4`}>
                            {language === 'en' ? 'Philosophy' : 'Filosofi'}
                        </h3>
                        <p className={`${orbitron.className} text-sm sm:text-base lg:text-md text-white font-medium mb-6 lg:mb-12`}>
                            {language === 'en' ? (
                                <>
                                    For the Oculus, victory comes from the ability to see farther and sharper than others. They believe that by observing every small detail and utilizing keen perception, they can craft tactics that create significant breakthroughs in battles or complex situations. They&apos;re masters at reading the room and spotting opportunities others miss.
                                </>
                            ) : (
                                <>
                                    Bagi Oculus, kemenangan datang dari kemampuan untuk melihat lebih jauh dan lebih tajam dari orang lain. Mereka percaya bahwa dengan memperhatikan setiap detail kecil dan memanfaatkan pengamatan yang jeli, mereka dapat merancang taktik yang membawa perubahan besar dalam peperangan atau situasi sulit lainnya. Mereka adalah ahli dalam membaca situasi dan menangkap celah yang tidak terlihat oleh orang lain.
                                </>
                            )}
                        </p>

                        <h3 className={`${orbitron.className} text-xl sm:text-2xl lg:text-3xl text-white font-black mb-2 lg:mb-4`}>
                            {language === 'en' ? 'Principle' : 'Prinsip'}
                        </h3>
                        <p className={`${orbitron.className} text-sm sm:text-base lg:text-md text-white font-medium mb-6 lg:mb-12`}>
                            {language === 'en' ? (
                                <>
                                    Matthew 6:22-23 (NIV) — “The eye is the lamp of the body. If your eyes are healthy, your whole body will be full of light. But if your eyes are unhealthy, your whole body will be full of darkness. If then the light within you is darkness, how great is that darkness!”
                                </>
                            ) : (
                                <>
                                    Matius 6:22-23 (TB) — Mata adalah pelita tubuh. Jika matamu baik, teranglah seluruh tubuhmu; jika matamu jahat, gelaplah seluruh tubuhmu. Jadi jika terang yang ada padamu gelap, betapa gelapnya kegelapan itu.
                                </>
                            )}
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
