import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ['400', '600'] });

export default function Footer() {
  return (
    <footer className="bg-black py-12 px-4 md:px-8">
        <div className={`${montserrat.className} max-w-6xl mx-auto border border-gray-700 rounded-lg`}>
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 p-6 md:p-10">
                {/* Left Column - Text Content */}
                <div className="flex flex-col justify-between space-y-2 text-white text-center lg:text-left">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Junior Church Camp CK7 2025</h3>
                        <p className="text-gray-400">Work together, we shine</p>
                    </div>
                    
                    <div className="mt-auto">
                        <p className="text-lg font-semibold mb-2 text-yellow-400">
                            Register Now!
                        </p>
                        <Link href="https://www.gbiprj.org/go/jc-camp" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline break-words">
                            www.gbiprj.org/go/jc-camp
                        </Link>
                    </div>
                </div>
                
                {/* Right Column - Logo and Social Media */}
                <div className="flex flex-col items-center space-y-2">
                    <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
                    <Image 
                        src="/resonate-logo.png"
                        alt="Resonate logo"
                        width={280}
                        height={100}
                        className="drop-shadow-lg max-w-full"
                    />
                    </div>
                    
                    <div className="space-y-4 w-full">
                        <div className="flex items-center justify-center gap-4 hover:bg-gray-900 p-3 rounded-full transition-all duration-300">
                            <div className="w-10 h-10 relative flex-shrink-0">
                            <Image 
                                src="/insta-logo.png"
                                alt="Instagram"
                                fill
                                className="object-contain"
                            />
                            </div>
                            <p className="text-white">
                                @jc.campck7
                            </p>
                        </div>
                        
                        <div className="flex items-center justify-center gap-4 hover:bg-gray-900 p-3 rounded-full transition-all duration-300">
                            <div className="w-10 h-10 relative flex-shrink-0">
                            <Image 
                                src="/youtube-logo.png"
                                alt="YouTube"
                                fill
                                className="object-contain"
                            />
                            </div>
                            <p className="text-white">
                                jc.campck7
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-gray-800 px-6 py-4 text-center text-gray-500 text-sm">
                © 2025 Junior Church Camp CK7. All rights reserved.
            </div>
        </div>
    </footer>
  );
}