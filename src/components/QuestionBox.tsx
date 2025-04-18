import { JetBrains_Mono } from "next/font/google";
const JetBrains = JetBrains_Mono({ subsets: ['latin'], weight: ["400", "700", "800"] });

interface QuestionBoxProps {
  question: string;
}

export default function QuestionBox(props: QuestionBoxProps) {
    return (
        <div 
            className="relative w-full h-[100px] md:h-[150px] flex items-center justify-center text-center overflow-hidden mt-2 "
        >
            <div className="relative z-10 px-7">
                <p className={`${JetBrains.className} text-white text-sm md:text-md lg:text-lg xl:text-3xl font-bold text-shadow-amber-200 text-shadow-lg px-5`}>
                    {props.question.toUpperCase()}
                </p>
            </div>
        </div>
    );
}