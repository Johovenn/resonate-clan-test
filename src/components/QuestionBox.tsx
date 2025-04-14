import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";

const JetBrains = JetBrains_Mono({ subsets: ['latin'], weight: ["400", "700"] });

interface QuestionBoxProps {
  question: string;
}

export default function QuestionBox(props: QuestionBoxProps) {
    return (
        <div 
            className="relative w-[800px] h-[200px] flex items-center justify-center text-center overflow-hidden mt-12"
            // style={{ backgroundImage: 'url("/question-frame.png")'}}
        >
            {/* <div className="absolute inset-0 bg-slate-300 opacity-40 rounded-3xl"></div> */}

            {/* <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute w-6 h-6 border-t-4 border-l-4 border-cyan-400 top-0 left-0"></div>
                <div className="absolute w-6 h-6 border-t-4 border-r-4 border-cyan-400 top-0 right-0"></div>
                <div className="absolute w-6 h-6 border-b-4 border-l-4 border-cyan-400 bottom-0 left-0"></div>
                <div className="absolute w-6 h-6 border-b-4 border-r-4 border-cyan-400 bottom-0 right-0"></div>
            </div> */}
            <Image
                src={'/question-frame.png'}
                alt="question frame"
                width={100}
                height={100}
                className="absolute object-fill w-full"
            />

            <div className="relative z-10 px-7">
                <p className={`${JetBrains.className} text-white text-3xl font-bold text-shadow-amber-200 text-shadow-lg px-5`}>
                    {props.question}
                </p>
            </div>
        </div>
    );
}