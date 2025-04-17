import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";

const JetBrains = JetBrains_Mono({ subsets: ['latin'], weight: ["400", "700"] });

interface QuestionBoxProps {
  question: string;
}

export default function QuestionBox(props: QuestionBoxProps) {
    return (
        <div 
            className="relative w-[320px] md:w-[400px] lg:w-[600px] xl:w-[800px] h-[100px] md:h-[150px] flex items-center justify-center text-center overflow-hidden mt-2 "
        >
            <Image
                src={'/question-frame.png'}
                alt="question frame"
                width={100}
                height={100}
                className="absolute object-fill w-full"
            />

            <div className="relative z-10 px-7">
                <p className={`${JetBrains.className} text-white text-sm md:text-md lg:text-lg xl:text-2xl font-bold text-shadow-amber-200 text-shadow-lg px-5`}>
                    {props.question}
                </p>
            </div>
        </div>
    );
}