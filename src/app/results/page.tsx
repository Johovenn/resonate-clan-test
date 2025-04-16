"use client"

import { Press_Start_2P } from "next/font/google";
import Image from "next/image"
import { useRouter } from "next/navigation";

const PressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ["400"] });

export default function ResultsPage(){
    const router = useRouter()

    return(
        <>
            <div
                className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center px-4 py-8"
                style={{ backgroundImage: "url('/background.png')" }}
            >
                <Image 
                    src={'/resonate-logo.png'}
                    alt="resonate"
                    width={800}
                    height={500}
                />
                <div className="flex items-center justify-between">
                    <div 
                        className="flex flex-col justify-center hover:scale-105 transition-all"
                        onClick={() => router.push('/results/neuro')}
                    >
                        <Image 
                            src={'/neuro.png'}
                            alt="neuro"
                            width={300}
                            height={300}
                        />
                        <p className={`${PressStart2P.className} text-center text-white text-shadow-white text-shadow-lg text-3xl`}>
                            NEURO
                        </p>
                    </div>
                    <div 
                        className="flex flex-col justify-center hover:scale-105 transition-all"
                        onClick={() => router.push('/results/philos')}
                    >
                        <Image 
                            src={'/philos.png'}
                            alt="philos"
                            width={300}
                            height={300}
                        />
                        <p className={`${PressStart2P.className} text-center text-white text-shadow-red-900 text-shadow-lg text-3xl`}>
                            PHILOS
                        </p>
                    </div>
                    <div 
                        className="flex flex-col justify-center hover:scale-105 transition-all"
                        onClick={() => router.push('/results/forte')}
                    >
                        <Image 
                            src={'/forte.png'}
                            alt="forte"
                            width={300}
                            height={300}
                        />
                        <p className={`${PressStart2P.className} text-center text-white text-shadow-green-500 text-shadow-lg text-3xl`}>
                            FORTE
                        </p>
                    </div>
                    <div 
                        className="flex flex-col justify-center hover:scale-105 transition-all"
                        onClick={() => router.push('/results/oculus')}
                    >
                        <Image 
                            src={'/oculus.png'}
                            alt="oculus"
                            width={300}
                            height={300}
                        />
                        <p className={`${PressStart2P.className} text-center text-white text-shadow-blue-500 text-shadow-lg text-3xl`}>
                            OCULUS
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}